import Header from "./Header";
import InfoPanelLoadPage from "./InfoPanel";
import sty from "./loadPagecss.module.css"
function MainLoadPage() {
    return (
      <div className={sty.mainPage}>
<Header></Header>
<InfoPanelLoadPage></InfoPanelLoadPage>
      </div>
      
      
    );
  }




  
  export default MainLoadPage;