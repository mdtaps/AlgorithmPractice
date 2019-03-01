function myFunc(files, parents, file1, file2) {

    var file1Parents = [];
    var file2Parents = [];
    var ccp = null;

    function populateFileParents(value, array) {
        for(i = 0; i < files.length - 1; i++) {
            if(value == files[i]) {
                var parent = parents[i];
                if(parent == -1) {
                    return
                } else {
                    array.push(parent);
                    populateFileParents(parent, array);
                    break;
                }
            }
        }
        //Should not get here since we should always find the file we're looking for
    }

    populateFileParents(file1, file1Parents);
    populateFileParents(file2, file2Parents);
    
    //Run backward through arrays to find Closest Common Parent

    for(offset = 0; ; offset++) {
        if(file1Parents[file1Parents.length - 1 - offset] == file2Parents[file2Parents.length - 1 - offset]) {
            ccp = file1Parents[file1Parents.length - 1 - offset]
        } else {
            return ccp
        }
    }
}