//import UnityEngine;
//import System;

class PlayerController extends MonoBehaviour
{
	var speed = 500.0;
	var countText : GUIText;
	var winText : GUIText;
	var loseText : GUIText;
	var timerText : GUIText;
	var timeUpText : GUIText;
	var timeRemaining : float = 5;
	
	private var count = 0;
	
	function Start()
	{
		SetCountText();
		winText.text = "";
	}
	
	function FixedUpdate()
	{
		var moveHorizontal : float = Input.GetAxis("Horizontal");
		var moveVertical : float = Input.GetAxis("Vertical");
		
		//var movement = Vector3(moveHorizontal, 0.0f, moveVertical);
		var movement = Vector3(moveHorizontal, 0.0f, moveVertical);
		//rb.AddForce(transform.forward * thrust);
		GetComponent.<Rigidbody>().AddForce(movement * speed * Time.deltaTime);
	}
	
	function OnTriggerEnter(other : Collider)
	{
		if(other.gameObject.tag == "treasure")
		{
			other.gameObject.SetActive(false);
			count += 1;
			SetCountText();
		}
		
		if (other.gameObject.tag == "treasure")
 		{
     		GetComponent.<AudioSource>().Play();
 		}
 		else {
     		GetComponent.<AudioSource>().Stop();
 		}
	}
		
	function SetCountText()
	{
		countText.text = "Count: " + count.ToString();
		
		if(count >= 19)
		{
			winText.text = "YOU WIN!";
			
			//timeRemaining = yield;
		}
		/*else{
			yield WaitForSeconds(5);
		}*/
	}
	
	function OnGUI(){
		//timerText.text = "Time Remaining: " + timeRemaining.ToString();
    	if(timeRemaining > 0){
       		//GUI.Label(new Rect(100, 100, 200, 100), "Time Remaining : "+timeRemaining);
       		timerText.text = "Time Remaining: " + timeRemaining.ToString();
    	}
    	else{
        	//GUI.Label(new Rect(100, 100, 200, 100), "Time's Up");
        	timeUpText.text = "Time's Up";
        	loseText.text = "YOU LOSE!";
        	
		}
	}
	
	function Update () {
    	timeRemaining -= Time.deltaTime;
    	
	}
}
