﻿class Rotator2 extends MonoBehaviour{
	
	function Update () {
		transform.Rotate (new Vector3 (0, 30, 0) * Time.deltaTime);
	}
}