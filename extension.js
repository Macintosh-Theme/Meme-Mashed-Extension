// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

const vscode = require('vscode');
const path = require("path")
const player = require('play-sound')({});



// this method is called when your extension is activated
// your extension is activated the very first time the command is executed


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
  }

function sleepMode(context){
	player.play(path.join(context.extensionPath, 'media', '64bit.wav'),{afplay: ['-v', -1 ]},function(err){
		if (err) throw err
	});

//   panel.webview.html = getWebviewContent();
// console.log(getWebviewContent())
// console.log(panel.active)
const window = vscode.window.activeTextEditor
const lineCount = window.document.lineCount
const lineUnit = Math.ceil(lineCount/9)
let leftedUnitIdx = 9 - 1
// console.log(vscode.window.activeTextEditor.document.getText())

vscode.window.activeTextEditor.edit((editor)=>{
	//8개
	const tempIdx = getRandomInt(0,leftedUnitIdx)
	editor.delete(new vscode.Range(tempIdx,0,tempIdx+lineUnit,10))
	leftedUnitIdx = leftedUnitIdx - 1
})

setTimeout(()=>{
	vscode.window.activeTextEditor.edit((editor)=>{
		//8개
	const tempIdx = getRandomInt(0,leftedUnitIdx)
	editor.delete(new vscode.Range(tempIdx,0,tempIdx+lineUnit,10))
	leftedUnitIdx = leftedUnitIdx - 1
	})
},1750)

setTimeout(()=>{
	vscode.window.activeTextEditor.edit((editor)=>{
		//8개
	const tempIdx = getRandomInt(0,leftedUnitIdx)
	editor.delete(new vscode.Range(tempIdx,0,tempIdx+lineUnit,10))
	leftedUnitIdx = leftedUnitIdx - 1
	})
},1750 + 1750)
setTimeout(()=>{
	vscode.window.activeTextEditor.edit((editor)=>{
		//8개
	const tempIdx = getRandomInt(0,leftedUnitIdx)
	editor.delete(new vscode.Range(tempIdx,0,tempIdx+lineUnit,10))
	leftedUnitIdx = leftedUnitIdx - 1
	})
},1750 + 1750 + 1750)
setTimeout(()=>{
	vscode.window.activeTextEditor.edit((editor)=>{
		//8개
	const tempIdx = getRandomInt(0,leftedUnitIdx)
	editor.delete(new vscode.Range(tempIdx,0,tempIdx+lineUnit,10))
	leftedUnitIdx = leftedUnitIdx - 1
	})
},1750 + 1750 + 1750 + 1600)
setTimeout(()=>{
	vscode.window.activeTextEditor.edit((editor)=>{
		//8개
	const tempIdx = getRandomInt(0,leftedUnitIdx)
	editor.delete(new vscode.Range(tempIdx,0,tempIdx+lineUnit,10))
	leftedUnitIdx = leftedUnitIdx - 1
	})
},1750 + 1750 + 1750 + 1600 + 1200)
setTimeout(()=>{
	vscode.window.activeTextEditor.edit((editor)=>{
		//8개
	const tempIdx = getRandomInt(0,leftedUnitIdx)
	editor.delete(new vscode.Range(tempIdx,0,tempIdx+lineUnit,10))
	leftedUnitIdx = leftedUnitIdx - 1
	})
},1750 + 1750 + 1750 + 1600 + 1200 + 1200)
setTimeout(()=>{
	vscode.window.activeTextEditor.edit((editor)=>{
		//8개
	const tempIdx = getRandomInt(0,leftedUnitIdx)
	editor.delete(new vscode.Range(tempIdx,0,tempIdx+lineUnit,10))
	leftedUnitIdx = leftedUnitIdx - 1
	})
},1750 + 1750 + 1750 + 1600 + 1200 + 1200 + 1200)
setTimeout(()=>{
	vscode.window.activeTextEditor.edit((editor)=>{
		//8개
	const tempIdx = getRandomInt(0,leftedUnitIdx)
	editor.delete(new vscode.Range(tempIdx,0,tempIdx+lineUnit,10))
	leftedUnitIdx = leftedUnitIdx - 1
	})
},1750 + 1750 + 1750 + 1600 + 1200 + 1200 + 1200 + 1200)
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let time = Date.now()
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vsc-retro-plugin" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	
	vscode.workspace.onDidChangeTextDocument((e)=>{
		time = Date.now()
	})

	setInterval(()=>{
		if(Date.now() - time > vscode.workspace.getConfiguration('memeMashedExtension').get("sleepTimeout")){
			sleepMode(context)
		}
		console.log("test")
	},10000)

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
