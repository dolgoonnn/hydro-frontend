<template>
    <div v-if="editor">
        <button
            @click="editor.chain().focus().setTextAlign('left').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
        >
            left
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('center').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
        >
            center
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('right').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
        >
            right
        </button>
        <button
            @click="editor.chain().focus().setTextAlign('justify').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
        >
            justify
        </button>
        <button
            @click="editor.chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor.isActive('bold') }"
        >
            Bold
        </button>
        <button
            @click="editor.chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }"
        >
            italic
        </button>
        <button
            @click="editor.chain().focus().setParagraph().run()"
            :class="{ 'is-active': editor.isActive('paragraph') }"
        >
            Paragraph
        </button>
        <button
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        >
            h1
        </button>
        <button
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        >
            h2
        </button>
        <button
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        >
            h3
        </button>
        <button
            @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': editor.isActive('bulletList') }"
        >
            bullet list
        </button>
        <button
            @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'is-active': editor.isActive('orderedList') }"
        >
            ordered list
        </button>
        <button
            @click="editor.chain().focus().toggleBlockquote().run()"
            :class="{ 'is-active': editor.isActive('blockquote') }"
        >
            blockquote
        </button>
        <button @click="editor.chain().focus().setHorizontalRule().run()">
            horizontal rule
        </button>
        <button
            @click="setLink"
            :class="{ 'is-active': editor.isActive('link') }"
        >
            setLink
        </button>
        <button
            @click="editor.chain().focus().unsetLink().run()"
            :disabled="!editor.isActive('link')"
        >
            unsetLink
        </button>
        <button @click="addImage">setImage</button>
    </div>
    <editor-content :editor="editor" v-model="editorData" />
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import BulletList from "@tiptap/extension-bullet-list";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import TextAlign from "@tiptap/extension-text-align";
import Text from "@tiptap/extension-text";

export default {
    components: {
        EditorContent,
    },

    data() {
        return {
            editor: null,
            editorData: null,
        };
    },

    methods: {
        addImage() {
            const url = window.prompt("URL");

            if (url) {
                this.editor.chain().focus().setImage({ src: url }).run();
            }
        },
        setLink() {
            const url = window.prompt("URL");

            // cancelled
            if (url === null) {
                return;
            }

            // empty
            if (url === "") {
                this.editor
                    .chain()
                    .focus()
                    .extendMarkRange("link")
                    .unsetLink()
                    .run();

                return;
            }

            // update link
            this.editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href: url })
                .run();
        },
    },

    mounted() {
        this.editor = new Editor({
            content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
            extensions: [
                StarterKit,
                Image,
                Dropcursor,
                BulletList,
                Link,
                ListItem,
                OrderedList,
                TextAlign.configure({
                    types: ["heading", "paragraph"],
                }),
                Text,
            ],
            autofocus: true,
        });
    },

    beforeUnmount() {
        this.editor.destroy();
    },
};
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
    > * + * {
        margin-top: 0.75em;
    }

    ul,
    ol {
        padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.1;
    }

    code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
    }

    pre {
        background: #0d0d0d;
        color: #fff;
        font-family: "JetBrainsMono", monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;

        code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: 0.8rem;
        }
    }

    img {
        max-width: 100%;
        height: auto;
    }

    blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0d0d0d, 0.1);
    }

    hr {
        border: none;
        border-top: 2px solid rgba(#0d0d0d, 0.1);
        margin: 2rem 0;
    }
}
</style>
