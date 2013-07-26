
var html = '\
\
<table class="grid">\
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
</table>';


export var template = html;