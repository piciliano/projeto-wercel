import './index.css'
import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import SubScript from '@tiptap/extension-subscript'
import ImgItalic from '../../icons/svgItalic.svg'
import ImgNegrito from '../../icons/ImgNegrito.png'
import ImgSubli from '../../icons/ImgSubli.svg'
import ImgCorte from '../../icons/ImgCortado.svg'
import ImgX from '../../icons/ImgX.svg'
import ImgX2 from '../../icons/ImgX2.svg'
import ImgMarker from '../../icons/ImgMarker.svg'
import ImgOrder from '../../icons/ImgOrder.svg'
import ImgLeft from '../../icons/ImgLeft.svg'
import ImgCenter from '../../icons/ImgCenter.svg'
import ImgRight from '../../icons/ImgRight.svg'
import ImgJustify from '../../icons/ImgJustify.svg'
import IconOne from '../../icons/IconOne.svg'
import IconTwo from '../../icons/IconTwo.svg'

const ModifyI = () =><img src={ImgItalic} alt="italic"/>
const ModifyN = () =><img src={ImgNegrito} alt="bold"/>
const ModifyS = () =><img src={ImgSubli} alt="sublinhar"/>
const ModifyC = () =><img src={ImgCorte} alt="sublinhar"/>
const ModifyX = () => <img src={ImgX} alt = "x"/>
const ModifyX2 =() => <img src={ImgX2} alt = "x2"/>
const ModifyM =() => <img src={ImgMarker} alt = "marker"/>
const ModifyO =() => <img src={ImgOrder} alt = "order"/>
const ModifyLeft =() => <img src={ImgLeft} alt = "order"/>
const ModifyCenter =() => <img src={ImgCenter} alt = "order"/>
const ModifyRight =() => <img src={ImgRight} alt = "order"/>
const ModifyJustify =() => <img src={ImgJustify} alt = "order"/>
const ModifyIconOne =() => <img src={IconOne} alt = "order"/>
const ModifyIconTwo =() => <img src={IconTwo} alt = "order"/>

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ], 
  })

  return (
    <RichTextEditor className='general-editor' editor={editor}>
      <RichTextEditor.Toolbar className='general-editor' sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold style={{border:'none'}} icon = {ModifyN}/>
          <RichTextEditor.Italic style={{border:'none'}} icon = {ModifyI}/>
          <RichTextEditor.Underline style={{border:'none'}} icon = {ModifyS} />
          <RichTextEditor.Strikethrough style={{border:'none'}} icon = {ModifyC}/>
          <RichTextEditor.Superscript   style={{border:'none'}} icon = {ModifyX}/>
          <RichTextEditor.Subscript  style={{border:'none'}} icon = {ModifyX2}/>
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.BulletList  style={{border:'none'}} icon = {ModifyM}/>
          <RichTextEditor.OrderedList   style={{border:'none'}} icon = {ModifyO}/> 
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft style={{border:'none'}} icon = {ModifyLeft} />
          <RichTextEditor.AlignCenter  style={{border:'none'}} icon = {ModifyCenter}/>
          <RichTextEditor.AlignRight  style={{border:'none'}} icon = {ModifyRight}/>
          <RichTextEditor.AlignJustify  style={{border:'none'}} icon = {ModifyJustify}/>
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link style={{border:'none'}} icon = {ModifyIconOne} />
          <RichTextEditor.Unlink  style={{border:'none'}} icon = {ModifyIconTwo}/>
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  )
}

export default TextEditor