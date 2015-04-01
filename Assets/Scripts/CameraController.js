class CameraController extends MonoBehaviour
{
	var player : GameObject;
	/*var loseText : GUIText;
	var timerText : GUIText;
	var timeUpText : GUIText;
	var timeRemaining : float = 5;*/
	private var offset : Vector3;
	
	function Start()
	{
		offset = transform.position;		
	}
		
	//Update is called once per frame
	function LateUpdate()
	{
		transform.position = player.transform.position + offset;
	}
	

}