function ControlPanel() {
    return (
        <div className="control-panel" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}>
            <div className="color-picker">
                <label htmlFor="color-palette">Color Palette:</label>
                <input type="color" id="color-palette" name="color-palette"
                       defaultValue="#ffffff" className="color-picker-input" style={{
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            margin: '0 10px',
         }}/>
            </div>
            <div className="font-size-picker">
                <label htmlFor="font-size">Font Size:</label>
                <select id="font-size" name="font-size">
                    <option value="18">18px</option>
                    <option value="16">16px</option>
                    <option value="14">14px</option>
                </select>
            </div>
            <div className="font-family-picker">
                <label htmlFor="font-family">Font Family:</label>
                <input type="text" id="font-family" name="font-family"
                       placeholder="Enter font family" />
            </div>
            <div className="photo-checkbox">
                <label htmlFor="include-photo">
                    <input type="checkbox" id="include-photo" name="include-photo" />
                    Include Photo in Top Card
                </label>
            </div>
            <div className="actions">
                <button id="download-pdf">Download as PDF</button>
                <button id="translate-cyrillic">Translate to Cyrillic and create a copy of the original below</button>
            </div>
            <div className="warning-message">
                <select id="translation-warning">
                    <option value="">Please double check the translation, it may not be accurate.</option>
                </select>
            </div>
            <div className="draggable-info">
                <p>Drag and drop cards to rearrange them. Top div is fixed.</p>
            </div>  
    </div>
    )
}

export default ControlPanel;