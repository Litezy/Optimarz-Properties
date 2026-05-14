import { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { mergeAttributes } from "@tiptap/core";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TiptapEditorProps {
  content: string;
  setContent: (html: string) => void;
  editable?: boolean;
  placeholder?: string;
}

// Block-level image that preserves all HTML attributes (src, style, alt, width, height)
const BlockImage = Image.extend({
  inline: false,
  group: "block",
  draggable: true,

  addAttributes() {
    return {
      ...this.parent?.(),
      style: {
        default: null,
        parseHTML: (el) => el.getAttribute("style"),
        renderHTML: (attrs) => (attrs.style ? { style: attrs.style } : {}),
      },
      width: {
        default: null,
        parseHTML: (el) => el.getAttribute("width"),
        renderHTML: (attrs) => (attrs.width ? { width: attrs.width } : {}),
      },
      height: {
        default: null,
        parseHTML: (el) => el.getAttribute("height"),
        renderHTML: (attrs) => (attrs.height ? { height: attrs.height } : {}),
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "figure",
      { style: "margin:1.5rem 0;display:block;" },
      ["img", mergeAttributes(HTMLAttributes, {
        style: HTMLAttributes.style ?? "width:100%;border-radius:12px;display:block;",
      })],
    ];
  },
});

const TiptapEditor = ({
  content,
  setContent,
  editable = true,
  placeholder = "Write your blog content...",
}: TiptapEditorProps) => {
  const [importOpen, setImportOpen] = useState(false);
  const [insertImageOpen, setInsertImageOpen] = useState(false);
  const [rawHtml, setRawHtml] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const editor = useEditor({
    editable,
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      BlockImage.configure({ allowBase64: true }),
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[260px] prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:underline prose-figure:my-4 prose-img:rounded-xl prose-img:shadow-md prose-img:w-full outline-none",
        spellCheck: "true",
        placeholder,
      },
    },
  });

  useEffect(() => {
    if (!editor) return;
    if (content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const insertImage = () => {
    if (!imageUrl.trim()) return;
    editor?.chain().focus().setImage({ src: imageUrl.trim() }).run();
    setImageUrl("");
    setInsertImageOpen(false);
  };

  const handleImport = () => {
    if (!rawHtml.trim()) return;
    editor?.commands.setContent(rawHtml);
    setContent(rawHtml);
    setRawHtml("");
    setImportOpen(false);
  };

  const toolbarBtn = (label: string, onClick: () => void, active?: boolean) => (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border border-border px-3 py-2 text-sm font-medium transition hover:bg-primary/10 ${
        active ? "bg-primary/20 text-primary" : ""
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-border bg-card p-3">
          {toolbarBtn("Bold", () => editor?.chain().focus().toggleBold().run(), editor?.isActive("bold"))}
          {toolbarBtn("Italic", () => editor?.chain().focus().toggleItalic().run(), editor?.isActive("italic"))}
          {toolbarBtn("Strike", () => editor?.chain().focus().toggleStrike().run(), editor?.isActive("strike"))}
          {toolbarBtn("H2", () => editor?.chain().focus().toggleHeading({ level: 2 }).run(), editor?.isActive("heading", { level: 2 }))}
          {toolbarBtn("H3", () => editor?.chain().focus().toggleHeading({ level: 3 }).run(), editor?.isActive("heading", { level: 3 }))}
          {toolbarBtn("Bullet", () => editor?.chain().focus().toggleBulletList().run(), editor?.isActive("bulletList"))}
          {toolbarBtn("Numbered", () => editor?.chain().focus().toggleOrderedList().run(), editor?.isActive("orderedList"))}
          {toolbarBtn("Quote", () => editor?.chain().focus().toggleBlockquote().run(), editor?.isActive("blockquote"))}
          {toolbarBtn("Insert image", () => setInsertImageOpen(true))}

          <button
            type="button"
            onClick={() => setImportOpen(true)}
            className="rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
          >
            Import HTML
          </button>
        </div>

        <div className="rounded-[1.25rem] border border-border bg-card p-4">
          <EditorContent editor={editor} />
        </div>
      </div>

      {/* Insert image modal */}
      <Dialog open={insertImageOpen} onOpenChange={setInsertImageOpen}>
        <DialogContent className="w-[95vw] max-w-md flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Insert image</DialogTitle>
            <DialogDescription>
              Paste a public image URL to embed it in the editor at your cursor position.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2">
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              onKeyDown={(e) => e.key === "Enter" && insertImage()}
              autoFocus
            />
            {imageUrl.trim() && (
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={imageUrl.trim()}
                  alt="Preview"
                  className="h-40 w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => { setImageUrl(""); setInsertImageOpen(false); }}>
              Cancel
            </Button>
            <Button onClick={insertImage} disabled={!imageUrl.trim()}>
              Insert
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Import HTML modal */}
      <Dialog open={importOpen} onOpenChange={setImportOpen}>
        <DialogContent className="max-h-[90vh] w-[95vw] max-w-2xl flex flex-col gap-4 overflow-hidden">
          <DialogHeader>
            <DialogTitle>Import HTML</DialogTitle>
            <DialogDescription>
              Paste your styled HTML below. This will replace the current editor content.
            </DialogDescription>
          </DialogHeader>

          <textarea
            value={rawHtml}
            onChange={(e) => setRawHtml(e.target.value)}
            placeholder="Paste your HTML here..."
            className="h-72 w-full resize-none rounded-xl border border-border bg-muted/30 p-4 font-mono text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
            spellCheck={false}
          />

          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              {rawHtml.length > 0 ? `${rawHtml.length} characters` : "Nothing pasted yet"}
            </p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => { setRawHtml(""); setImportOpen(false); }}>
                Cancel
              </Button>
              <Button onClick={handleImport} disabled={!rawHtml.trim()}>
                Apply to editor
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TiptapEditor;