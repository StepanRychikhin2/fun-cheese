import Header from "./Header";
import InfoPanel from "./InfoPanel";
import sty from "./loadPagecss.module.css"
function MainLoadPage() {
    return (
      <div className={sty.mainPage}>
<Header></Header>
<InfoPanel></InfoPanel>
      </div>
      
      
    );
  }




  
  export default MainLoadPage;