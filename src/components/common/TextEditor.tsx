import * as React from 'react';
import { RichTextEditor } from '@mantine/rte';

export interface ITextEditorProps {}

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

export function TextEditor(props: ITextEditorProps) {
  const [value, onChange] = React.useState(initialValue);

  return (
    <RichTextEditor
      value={value}
      onChange={onChange}
      controls={[
        ['bold', 'italic', 'underline', 'link', 'image'],
        ['unorderedList', 'orderedList', 'h1', 'h2', 'h3'],
        ['alignLeft', 'alignCenter', 'alignRight'],
      ]}
    />
  );
}
