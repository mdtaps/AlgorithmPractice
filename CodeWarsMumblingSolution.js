function accum(s) {
    var finalString = ""
      for(i=0;i<s.length;i++) {
        var myChar = s.charAt(i);
        finalString += myChar.toUpperCase();

        for(j=0;j<i;j++) {
            finalString += myChar.toLowerCase();
        }

        //If on the final character, don't print the dash
        if(i != s.length-1) {
            finalString += "-";
        }
    }
    return finalString;
}