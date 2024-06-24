/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Imports the InspectorControls component, which is used to wrap
 * the block's custom controls that will appear in in the Settings
 * Sidebar when the block is selected.
 *
 * Also imports the React hook that is used to mark the block wrapper
 * element. It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#inspectorcontrols
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps,BlockControls } from '@wordpress/block-editor';
import { ColorPalette,FontSizePicker,Toolbar,ToolbarButton } from '@wordpress/components';
import { icon, formatBold,formatItalic,link } from '@wordpress/icons';

/**
 * Imports the necessary components that will be used to create
 * the user interface for the block's settings.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panelbody
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/
 */
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

/**
 * Imports the useEffect React Hook. This is used to set an attribute when the
 * block is loaded in the Editor.
 *
 * @see https://react.dev/reference/react/useEffect
 */
import { useEffect } from 'react';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {Element} Element to render.
 */
import { useState } from '@wordpress/element';

const MyColorPalette = () => {
  
  const colors = [
    { name: 'red', color: '#f00' },
    { name: 'white', color: '#fff' },
    { name: 'blue', color: '#00f' },
  ];
}

  const colors = [
    { name: 'red', color: '#f00' },
    { name: 'white', color: '#fff' },
    { name: 'blue', color: '#00f' },
  ];
import './editor.scss';
export default function Edit( { attributes, setAttributes } ) {
	console.log(attributes);
	const setTextColor = (color)=>{
setAttributes({text_color:color})
	}
	const setFontSize = (size)=>{
setAttributes({text_size:size})
	}
	const setBold = ()=>{

		setAttributes({
			is_bold:!attributes.is_bold
		})
	}
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
		<BlockControls>
		
      <ToolbarButton icon={ formatBold } label="Bold" onClick={setBold} isPressed={attributes.is_bold}/>
     
   
		</BlockControls>
		<InspectorControls>
		<ColorPalette
      colors={ colors }
	  value= {attributes.text_color}
     onChange={setTextColor}
    />
	<FontSizePicker
  fontSizes={[
    {
      name: 'Small',
      size: 50,
      slug: 'small'
    },
    {
      name: 'Normal',
      size: 60,
      slug: 'normal'
    },
    {
      name: 'Big',
      size: 70,
      slug: 'big'
    }
  ]}
  onChange={setFontSize}
  value={attributes.text_size}
/>
		</InspectorControls>
		<TextControl
				value={attributes.message}
				onChange={(val) => setAttributes({ message: val})}
				style={
					{color:attributes.text_color,
					fontSize:attributes.text_size,
					fontWeight:attributes.is_bold?'bold':''
					}
					
					}
			/>	
		</div>
	);
}
