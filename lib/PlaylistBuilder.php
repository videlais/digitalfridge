<?php

/*
 * 
 */
class PlaylistBuilder {

	private $_files = [];
	private $_fileTypes = [".mp3"];
	private $_paths = [];

	public function __construct($dir) {
        
        // Check that this is a directory
		if(is_dir($dir)) {

			// Since it it a directory, scan it
			$this->_files = scandir($dir);
		} 

		$this->buildPlaylist($this->_files);
    }

	private function buildPlaylist($files) {

		// Check if the directory has any files.
		//  If not, there is no reason to continue
		if(count($files) > 0) {

			foreach($files as $path) {
				
				// Force to lowercase
				$path =  strtolower($path);

				foreach($this->_fileTypes as $type) {

					$line = strstr($path, $type, true);

					// Check if there were short strings
					if(strlen($line) > 1) {
						array_push($this->_paths, $line);
					}
					
				}
				
			}
		}
	}

	public function getPlaylist() {
		return json_encode($this->_paths);
	}

}