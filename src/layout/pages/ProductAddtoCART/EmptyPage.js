import Picture from "../../imagin/picture/Picture";

function EmptyPage() {
    return (  
        <div className="AddtoCartPage-emptypage">
            <img src={Picture.emptyCart} alt="emptypage" />
        </div>
    )
    ;
}

export default EmptyPage;