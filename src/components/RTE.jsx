import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey="81in3xpeis9dmfsq5wv4er9hq4nedf1kye1rv8t53q8ag3ly"
              initialValue={defaultValue}
              init={{
                height: 400,
                menubar: true,
                skin: "oxide", // light theme
                content_css: "default", // ensures Tailwind-like fonts
                plugins: [
                  "advlist", "autolink", "lists", "link", "image", "charmap",
                  "preview", "anchor", "searchreplace", "visualblocks", "code",
                  "fullscreen", "insertdatetime", "media", "table", "wordcount"
                ],
                toolbar:
                  "undo redo | blocks | bold italic underline forecolor backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | link image media | removeformat | help",
                content_style: `
                  body {
                    font-family: 'Inter', system-ui, Helvetica, Arial, sans-serif;
                    font-size: 15px;
                    color: #1f2937;
                    background-color: #ffffff;
                  }
                  @media (prefers-color-scheme: dark) {
                    body {
                      color: #e5e7eb;
                      background-color: #111827;
                    }
                  }
                `,
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  );
};

export default RTE;
