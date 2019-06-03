import React from "react"
import ViewMoreButton from "./viewMoreButton.js"
import ProjectPopUpContent from "./projectPopUpContent.js"

import "./styles/projectPopUp.css"


class ProjectPopUp extends React.Component{
   
    componentDidMount(){
        document.getElementById(this.props.projectName).style.display="block";
    }
    componentWillUnmount(){
        document.getElementById(this.props.projectName).style.display = "none";
    }
    render(){ return(
        <div className="pop_Up_Container">
            <div className="background_Blur"></div>
            <div className= "pop_up_content">
                <div className = "exitButton"><ViewMoreButton style = "button_container_tab" phrase="close" clicked = {this.props.clicked}/></div>
                <div className = "pop_up_header"><h1>Overhead</h1></div>
                <div className= "filler" >
                    <ProjectPopUpContent />
                </div>
           </div>
        </div>
    )};
}

export default ProjectPopUp



/*
//<div filler

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dolor urna, fringilla vitae leo ut, tempus auctor ipsum. Mauris aliquet sit amet quam vitae porttitor. Duis quis massa nisl. Maecenas et mi eu elit dictum ornare. Pellentesque in semper urna, id pretium augue. Proin laoreet ac nisi vel posuere. Integer id congue diam.</p>
    <p>Sed sollicitudin consequat dui, non congue nunc. Nam urna erat, porta id orci ut, vehicula lobortis elit. Vestibulum ullamcorper ac nulla vitae euismod. Integer lacus neque, posuere et lectus in, feugiat consequat eros. Nulla facilisi. Ut sem erat, pharetra in sem ac, vestibulum mollis quam. Nunc sit amet tempor felis.</p>
    <p>Sed eget hendrerit sapien. Etiam at erat in nulla sagittis dictum ac sed ipsum. Vestibulum nec velit sed dolor facilisis vestibulum. Duis hendrerit scelerisque iaculis. Integer euismod vel arcu quis dignissim. Nulla laoreet quam eu ornare congue. Maecenas cursus est ac mauris porta porta. Morbi ac commodo enim, sagittis dictum dolor. Curabitur ut tortor sed diam aliquet commodo sed fringilla urna. Morbi varius vitae metus vel iaculis.</p>
    <h2>Quisque eros</h2>
    <p>Proin id porta felis. Vestibulum ut mauris a ante blandit mattis ac in lorem. Integer in dui elementum, imperdiet felis at, elementum diam. Quisque at faucibus justo. Quisque eros ante, facilisis sed finibus vel, tristique a justo. Donec placerat rutrum elit. Sed nisl dui, bibendum vitae ultrices sit amet, luctus vitae arcu. Nam vel enim libero. Pellentesque mollis consectetur neque a tristique. Maecenas posuere sodales iaculis.</p>
    <p>Pellentesque lacinia cursus pulvinar. Vivamus vitae sagittis ligula. Duis fringilla lectus at leo rutrum vehicula. Cras justo magna, gravida nec ex non, iaculis varius risus. Nullam sit amet eros non ipsum volutpat dignissim. In aliquam facilisis augue sit amet semper. Aenean malesuada feugiat pretium. Suspendisse vel nulla a justo congue maximus id id augue. Morbi vulputate est eu risus sodales suscipit. Nullam commodo ipsum sit amet quam eleifend aliquam. Pellentesque pellentesque egestas nisl at convallis. Fusce tincidunt, est eu rutrum laoreet, nibh eros dignissim sem, in viverra nibh tortor vel massa. Morbi tincidunt massa sed mauris efficitur, sed elementum odio ornare. Etiam vestibulum condimentum luctus. Proin elit velit, aliquam sed arcu vel, posuere fringilla nisi.</p>
    <h2>Metus gravida</h2>
    <p>Nulla ut metus gravida, viverra ligula eget, volutpat ante. Pellentesque euismod, risus nec fermentum vestibulum, urna massa accumsan enim, vitae egestas augue erat ut nibh. Vestibulum suscipit euismod velit, non mattis metus lobortis sed. Aenean in diam vel quam ultrices finibus vitae nec massa. Praesent eget eleifend turpis, nec varius dolor. Vestibulum odio elit, blandit in fermentum vitae, venenatis vitae ligula. Curabitur suscipit, quam et sagittis posuere, lectus eros laoreet purus, id vulputate tellus mi consequat lacus. Praesent non laoreet metus, at sagittis urna. Duis ut convallis tellus, tincidunt laoreet nisi. Duis at malesuada quam, in accumsan eros. Curabitur nisi ipsum, accumsan in mi eget, imperdiet varius ipsum. Nullam nec porttitor dui. Etiam viverra neque vitae pellentesque ullamcorper.</p>
    <p>Sed vitae massa porttitor, suscipit libero ac, aliquam tortor. Nunc vitae augue lobortis, interdum leo nec, pulvinar urna. Proin tempus, nisl ut tempus ultrices, magna ipsum ullamcorper odio, vitae tempus erat urna in dolor. Donec condimentum ligula ac augue aliquet blandit. Sed lobortis mauris nec tempus cursus. Duis congue imperdiet ullamcorper. Aenean imperdiet purus non urna varius imperdiet. Pellentesque quis velit ut felis commodo mattis. Etiam interdum neque ut nibh sodales efficitur in vitae sapien. Fusce quis ante tellus. In porta semper ligula, a feugiat dolor semper eget. Mauris rutrum convallis vehicula. Sed sit amet iaculis risus.</p>
    <div className="filler_spacer"></div>


//div filler>

*/