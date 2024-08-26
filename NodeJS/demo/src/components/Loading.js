import {ThreeDot} from "react-loading-indicators";
function Loading() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#F9F9F9',
      }}>
         <ThreeDot variant="bounce" color="#2b2b2b" size="large" text="đang tải, đợi xíu" textColor="" />
      </div>
    );
  }
  
  export default Loading;