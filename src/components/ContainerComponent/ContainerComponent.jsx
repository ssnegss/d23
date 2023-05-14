import "./ContainerComponent.css";

export const ContainerComponent = () => {
   return (
      <div>
         <div className="ContainerComponent__container">
            <h1 className="ContainerComponent__container_header">Text</h1>
            <div className="ContainerComponent__container_img">
               <img src="" alt="my image" />
            </div>
            <p className="ContainerComponent__container_description">
               mini text
            </p>
         </div>
      </div>
   );
};
