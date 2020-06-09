pragma solidity >=0.5.3;

contract IPFSEngine {
	struct IpfsHash {
	  	bytes32 hash;
	  	bytes2 quotient;
	  	uint8 size;
	}

    string hash;

	function storeDataAsString(string memory _hash) public {
		hash = _hash;
	}

	function storeDataAsStruct(bytes32 _hash, bytes2 _hash_function, uint8 _size) public returns (IPFSHash memory IPFSHashMemory) {
		IPFSHash memory IPFSHashMemory;
		IPFSHashMemory.hash = _hash;
		IPFSHashMemory.quotient = _hash_function;
		IPFSHashMemory.size = _size;
	}

    event DataStoredInTheLog(string _hash);
	function storeDataAsLog(string memory _hash) public {
		emit DataStoredInTheLog(_hash);
	}

}