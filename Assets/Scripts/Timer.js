#pragma strict
var showText:boolean =false;

function StopWatch (time:float) { 
	yield WaitForSeconds (5); 
	showText=true; 
} 
	
function OnGUI () { 
	if (showText==true) { 
		GUI.Label (Rect(100,100,300,150),"this text will be shown after the timer ends"); 
	} 
}

function Start () {

}

function Update () {

}