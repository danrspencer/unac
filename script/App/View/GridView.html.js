define(["require", "exports"], function(require, exports) {
    /// <reference path="../../Vendor/jquery.d.ts" />
    /// <reference path="../../Vendor/underscore.d.ts" />
    /// <reference path="../../Vendor/underscore-typed.d.ts" />
    var html = '<table class="grid"> \
             <tr> \
               <td data-square="<%= content[0].id %>" class="square <%= gridFree ? "top left" : "" %> <%= content[0].getWinner() == 1 ? "p1owned" : (content[0].getWinner() == 2 ? "p2owned" : "unowned") %>"> \
               <%= content[0].render() %> \
               </td> \
               <td data-square="<%= content[1].id %>" class="square <%= gridFree ? "top" : "" %> <%= content[1].getWinner() == 1 ? "p1owned" : (content[1].getWinner() == 2 ? "p2owned" : "unowned") %>"> \
               <%= content[1].render() %> \
               </td> \
               <td data-square="<%= content[2].id %>" class="square <%= gridFree ? "top right" : "" %> <%= content[2].getWinner() == 1 ? "p1owned" : (content[2].getWinner() == 2 ? "p2owned" : "unowned") %>"> \
               <%= content[2].render() %> \
               </td> \
             </tr> \
             <tr> \
               <td data-square="<%= content[3].id %>" class="square <%= gridFree ? "left" : "" %> <%= content[3].getWinner() == 1 ? "p1owned" : (content[3].getWinner() == 2 ? "p2owned" : "unowned") %>"> \
               <%= content[3].render() %> \
               </td> \
               <td data-square="<%= content[4].id %>" class="square <%= content[4].getWinner() == 1 ? "p1owned" : (content[4].getWinner() == 2 ? "p2owned" : "unowned") %>"> \
               <%= content[4].render() %> \
               </td> \
               <td data-square="<%= content[5].id %>" class="square <%= gridFree ? "right" : "" %> <%= content[5].getWinner() == 1 ? "p1owned" : (content[5].getWinner() == 2 ? "p2owned" : "unowned") %>"> \
               <%= content[5].render() %> \
             </td> \
             </tr> \
             <tr> \
               <td data-square="<%= content[6].id %>" class="square <%= gridFree ? "bottom left" : "" %> <%= content[6].getWinner() == 1 ? "p1owned" : (content[6].getWinner() == 2 ? "p2owned" : "unowned") %>"> \
               <%= content[6].render() %> \
               </td> \
               <td data-square="<%= content[7].id %>" class="square <%= gridFree ? "bottom" : "" %> <%= content[7].getWinner() == 1 ? "p1owned" : (content[7].getWinner() == 2 ? "p2owned" : "unowned") %>"> \
               <%= content[7].render() %> \
               </td> \
               <td data-square="<%= content[8].id %>" class="square <%= gridFree ? "bottom right" : "" %> <%= content[8].getWinner() == 1 ? "p1owned" : (content[8].getWinner() == 2 ? "p2owned" : "unowned") %>"> \
               <%= content[8].render() %> \
             </td> \
             </tr> \
           </table>';

    var template = _.template(html);

    
    return template;
});
//# sourceMappingURL=GridView.html.js.map
