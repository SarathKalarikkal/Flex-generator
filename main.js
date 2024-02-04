const wizardBtn = document.getElementById('WizardBtn')
const docsBtn = document.getElementById('DocsBtn')
const docs = document.querySelector('.docs')
const wizard = document.querySelector('.wizard')

const flexboxContainer = document.querySelector(".flexbox-container") 
const flexCheckBox = document.getElementById('d-Flex')
const rowBtn =  document.getElementById('row')
const columnBtn =  document.getElementById('column')
const alignstartBtn =  document.getElementById('align-start')
const alignCenterBtn =  document.getElementById('align-center')
const alignEndBtn =  document.getElementById('align-end')
const justifyStartBtn =  document.getElementById('start')
const justifyCenterBtn =  document.getElementById('center')
const justifyEndBtn =  document.getElementById('end')
const justifySpaceBwnBtn =  document.getElementById('space-between')
const justifySpaceArrndBtn =  document.getElementById('space-arround')
const justifySpaceEnlyBtn =  document.getElementById('space-evenly')
const codeGeneratorBtn =  document.querySelector('.code-generator button')
const codeSection = document.getElementById('codeSection');



docsBtn.addEventListener('click', ()=>{
  if(wizardBtn.classList.contains('active')){
    wizardBtn.classList.remove('active')
    docsBtn.classList.add('active')
    docs.classList.add('active')
    wizard.classList.remove('active')
  }
})
wizardBtn.addEventListener('click', ()=>{
  if(docsBtn.classList.contains('active')){
    docsBtn.classList.remove('active')
    wizardBtn.classList.add('active')
    docs.classList.remove('active')
    wizard.classList.add('active')
  }
})



flexCheckBox.addEventListener('change', ()=>{
  if(flexCheckBox.checked){
    flexboxContainer.style.display = 'flex'
  }else{
    flexboxContainer.style.display = ''
  }
})

rowBtn.addEventListener("change",()=>{
  if (rowBtn.checked) {
    flexboxContainer.style.flexDirection = 'row'
} else {
  flexboxContainer.style.flexDirection = ''
}
})
columnBtn.addEventListener("change",()=>{
  if (columnBtn.checked) {
    flexboxContainer.style.flexDirection = 'column'
} else {
  flexboxContainer.style.flexDirection = ''
}
})


alignstartBtn.addEventListener("change",()=>{
  if (alignstartBtn.checked) {
    flexboxContainer.style.alignItems = 'start'
} else {
  flexboxContainer.style.alignItems = ''
}
})
alignCenterBtn.addEventListener("change",()=>{
  if (alignCenterBtn.checked) {
    flexboxContainer.style.alignItems = 'center'
} else {
  flexboxContainer.style.alignItems = ''
}
})
alignEndBtn.addEventListener("change",()=>{
  if (alignEndBtn.checked) {
    flexboxContainer.style.alignItems = 'end'
} else {
  flexboxContainer.style.alignItems = ''
}
})



justifyStartBtn.addEventListener("change",()=>{
  if (justifyStartBtn.checked) {
    flexboxContainer.style.justifyContent = 'start'
} else {
  flexboxContainer.style.justifyContent = ''
}
})
justifyCenterBtn.addEventListener("change",()=>{
  if (justifyCenterBtn.checked) {
    flexboxContainer.style.justifyContent = 'center'
} else {
  flexboxContainer.style.justifyContent = ''
}
})
justifyEndBtn.addEventListener("change",()=>{
  if (justifyEndBtn.checked) {
    flexboxContainer.style.justifyContent = 'end'
} else {
  flexboxContainer.style.justifyContent = ''
}
})


justifySpaceBwnBtn.addEventListener("change",()=>{
  if (justifySpaceBwnBtn.checked) {
    flexboxContainer.style.justifyContent = 'space-between'
} else {
  flexboxContainer.style.justifyContent = ''
}
})
justifySpaceArrndBtn.addEventListener("change", () => {
  if (justifySpaceArrndBtn.checked) {
    flexboxContainer.style.justifyContent = 'space-around'; 
  } else {
    flexboxContainer.style.justifyContent = '';
  }
})
justifySpaceEnlyBtn.addEventListener("change",()=>{
  if (justifySpaceEnlyBtn.checked) {
    flexboxContainer.style.justifyContent = 'space-evenly'
} else {
  flexboxContainer.style.justifyContent = ''
}
})






const codeGenrator = () => {
  

  let loading = 'loading ....';
  codeSection.innerText = loading;

  setTimeout(()=>{
    const isFlex = flexCheckBox.checked;
    const flexDirection = document.querySelector('input[name="flexDirection"]:checked')?.id;
    const alignItems = document.querySelector('input[name="align-items"]:checked')?.value;
    const justifyContent = document.querySelector('input[name="justify-content"]:checked')?.id;
  
    const selectedProperties = [];
  
    if (isFlex) selectedProperties.push('display: flex;');
    if (flexDirection) selectedProperties.push(`flex-direction: ${flexDirection};`);
    if (alignItems) selectedProperties.push(`align-items: ${alignItems};`);
    if (justifyContent) selectedProperties.push(`justify-content: ${justifyContent};`);

    const generateCode = `.flex-container {
      ${selectedProperties.join('\n    ')}
    }`;
  
    codeSection.innerText = generateCode;
  },1000)

  
};

codeGeneratorBtn.addEventListener('click', codeGenrator);




function copyCode() {
  let codeSection = document.getElementById("codeSection");

  let range = document.createRange();
  range.selectNode(codeSection);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  document.execCommand("copy");

  window.getSelection().removeAllRanges();

  if (codeSection.innerText === '') {
    alert("Please select the flex options");
  } else {
    alert("Code copied to clipboard!");
  }
}


resetBtn = document.getElementById('reset-Btn')
resetBtn.addEventListener('click', ()=>{
  flexboxContainer.style.display = '';
  flexboxContainer.style.flexDirection = '';
  flexboxContainer.style.alignItems = '';
  flexboxContainer.style.justifyContent = '';
  codeSection.innerText = ''

  const allCheckBoxs = document.querySelectorAll('input')

  allCheckBoxs.forEach((checkBox)=>{
    checkBox.checked =false;
  })
  
})