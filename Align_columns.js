function formatText(input, justification) {
    let numCols = 0;
    //split words and push to inputArray in rows
    let inputArray = []
    input.map((row) => {
       //let regex = new RegExp(/[$]+$/)
       //row = row.replace(regex,'')
       row = row.split('$')
 
       if (row.length > numCols) {
          numCols = row.length-1
       }
       inputArray.push(row)
    })
 
    //calculate column widths based on longest word at that column index
    let colWidths = []
    for (let col = 0; col < numCols ; col++){
       let colWidth = 0
       for (let rowIndex = 0; rowIndex < inputArray.length; rowIndex ++ ) {
          if (inputArray[rowIndex][col]) {
             if (inputArray[rowIndex][col].length > colWidth) {
                colWidth = inputArray[rowIndex][col].length
             }
          }
       }
       colWidths.push(colWidth)
       colWidth = 0
    }
 
    //create function to pad words
    function addSpaces(word, justification, width) {
       switch(justification) {
          case 'left':
             return word.padEnd(width, ' ');
          case 'right':
             return word.padStart(width, ' ');
          case 'center':
             const padding = width-word.length
             const leftPad = Math.floor(padding/2)
             return ' '.repeat(leftPad)+word+' '.repeat(padding-leftPad);  
       }
    }
 
    //iterate over inputArray array again, and for each word, add spacing accordingly
    let result = []
    inputArray.map((row, rowIndex) => {
       let newRow = []
      row.map((word, wordIndex) => {
         if (word) {
          newRow.push(addSpaces(word, justification, colWidths[wordIndex]))
         }
         else {
            newRow.push(word)
         }
      }) 
       
       result.push(newRow.join(' '))
      
    })
 
    return result.join('\n')
 }
 
 
 
 
 const testText = [
    'Given$a$text$file$of$many$rows',
    'where$fields$within$a$row$',
    'are$derowated$by$a$single$"dollar"$character',
    'write$a$program',
    'that$aligns$each$column$of$fields$',
    'by$ensuring$that$words$in$each$',
    'column$are$separated$by$at$least$one$space.',
    'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
    'justified,$right$justified',
    'or$center$justified$within$its$column.'
 ];
 console.log(formatText(testText, 'left'))
 
 
 
 
 
