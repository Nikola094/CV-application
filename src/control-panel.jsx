import downloadIcon from './assets/download.svg';
import translateIcon from './assets/translate.svg';
import html2pdf from 'html2pdf.js';

const handleDownloadPDF = () => {
  document.querySelectorAll('.card-buttons-wrapper').forEach(btn => btn.style.display = 'none');

  const element = document.getElementById('cv-wrapper');

  const opt = {
    margin: 0.5,
    filename: 'cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  console.log("CV element:", element);

  html2pdf().from(element).set(opt).save().then(() => {
    document.querySelectorAll('.card-buttons-wrapper').forEach(btn => btn.style.display = '');
  });
};

function ControlPanel({ settings, onSettingsChange }) {
      if (!settings) return null;   

    return (
        <>
        <div className="control-panel" 
        style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '20px',
            backgroundColor: 'hsla(0, 0%, 94%, 0.07)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            width: '100vw',
            margin: '0 auto',
            flexWrap: 'wrap',
        }}>
            <div className="color-picker">
                <label htmlFor="color-palette">Color Palette:</label>
                <input type="color"
                       id="color-palette" 
                       name="color-palette"
                       defaultValue="#ffffff"
                       className="color-picker-input" 
                       onChange={(e) => onSettingsChange({ color: e.target.value })}
                       style={{
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            marginLeft: '0.5rem',
            verticalAlign: 'middle',
         }}/>
            </div>
            <div className="font-size-picker">
                <label htmlFor="font-size">Font Size:</label>
                <select id="font-size" name="font-size"
                          onChange={(e) => onSettingsChange({ fontSize: `${e.target.value }px` })}
                 style={{
                    height: '1.5rem',
                    width: '6.5rem',
                    marginTop: '0.2rem',
                    marginLeft: '0.5rem',
                }}>
                    <option value="18">18px</option>
                    <option value="16">16px</option>
                    <option value="14">14px</option>
                </select>
            </div>
            <div className="font-family-picker">
                <label htmlFor="font-family">Font Family:</label>
                <input type="text" 
                       id="font-family" 
                       name="font-family"
                       placeholder="Enter font family" 
                          onChange={(e) => onSettingsChange({ fontFamily: e.target.value })}
                       style={{
            width: '8rem',
            height: '1.5rem',
            marginLeft: '0.5rem',
                       }} />
            </div>
            <div className="checkboxs" style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <label htmlFor="include-photo">
                    <input type="checkbox" 
                           id="include-photo" 
                           name="include-photo" 
                           checked={settings.includePhoto || false}
                            onChange={(e) => onSettingsChange({ includePhoto: e.target.checked })}
                           style={{
                        marginRight: '0.5rem',
                        cursor: 'pointer',
                        verticalAlign: 'middle',
                    }} />
                    Include Photo in Top Card
                </label>
                <label htmlFor="render-edit-btns">
                    <input type="checkbox"
                           name="render-edit"
                           id="render-edit" 
                           checked={settings.showEditButtons} 
                           onChange={(e) => onSettingsChange({ showEditButtons: e.target.checked })}
                           style={{
                            marginRight: '0.5rem',
                            verticalAlign: 'middle'
                           }}/>
                    Show Edit Buttons
                </label>
            </div>
                <div className="actions">
                <button id="download-pdf-btn" 
                        onClick={handleDownloadPDF}
                        style={{
                        background: '#1ab3e683',
                        boxShadow: '0 5px 5px 0 rgba(0,0,0,0.2)',
                        border: 'none',
                        padding: '0.5rem',
                        marginRight: '1rem',
                        cursor: 'pointer',}}>
                    <img src={downloadIcon} alt="Download as PDF" style={{ width: '40px', height: '15px' }} />
                </button>
                <label htmlFor="download-pdf-btn">Download as PDF</label>
                <div>
                    <button id="translate-cyrillic-btn" style={{ 
                        background: '#1ab3e683',
                        boxShadow: '0 5px 5px 0 rgba(0,0,0,0.2)',
                        border: 'none',
                        padding: '0.5rem',
                        marginRight: '1rem',
                        marginTop: '0.5rem',
                        cursor: 'pointer',}}>
                    <img src={translateIcon} alt="Translate to Cyrillic" style={{ width: '40px', height: '15px' }} />
                    </button>
                    <label htmlFor="translate-cyrillic-btn">Translate to Cyrillic and create a copy of the original below</label>
                    <select id="translation-warning" style={{ display: 'none' }}>
                    <option value="">Please double check the translation, it may not be accurate.</option>
                    </select>
                </div>
                </div>
    </div>
            <div className="draggable-info" style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
            }}>
                <p>Drag and drop cards to rearrange them. Top div is fixed.</p>
                
            </div>
      </>
    )
}

export default ControlPanel;