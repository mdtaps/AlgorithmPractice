function troubleFiles(files, backups) {
    var troubleArray = [],
        fileIndex = 0;
        
    for(i=0; i<backups.length; i++) {
        var sizeOfWaitingFiles = 0;
        
        //If file is added to queue before backup starts,
        //add the time to the queue and look for the next file
        while(files[fileIndex][0] <= backups[i]) {
            sizeOfWaitingFiles += files[fileIndex][1];
            if(fileIndex + 1 < files.length) {
                fileIndex++;
            } else {
                //At the end of the files, need to figure out what to do here
                break;
            }
        }
        
        //Start backup
        for(j=backups[i] + 1; j<=backups + sizeOfWaitingFiles; j++) {
            //If a file is added during this backup time
            //then add it to the trouble file and increment fileIndex
            if(j==files[fileIndex][0]) {
                troubleArray[i]+= 1;
                fileIndex++;
            }
        }
        
        var currentTime = backups + sizeOfWaitingFiles;
        //If a backup happened while the previous backup was running,
        //then skip that backup and make troubleArray index 0,
        //also check to make sure we don't go out of bounds
        while(i+1 < backups.length - 1 && backups[i + 1] < currentTime) {
            troubleArray[i] = 0;
            i++;
        }
    }
    
    return troubleArray;
}

