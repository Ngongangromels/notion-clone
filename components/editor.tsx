import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useEdgeStore } from "@/lib/edgstore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore()

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
        file
    })

    return response.url
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
      uploadFile: handleUpload
  });

  useEffect(() => {
    if (!editor) return;

    const unsubscribe = editor.onChange(() => {
      const json = JSON.stringify(editor.topLevelBlocks, null, 2);
      onChange(json);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe(); 
      }
    };
  }, [editor, onChange]);

  return (
    <BlockNoteView
      editor={editor}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
};

export default Editor