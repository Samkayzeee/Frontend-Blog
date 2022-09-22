import './Homepage.css'
import image from '../../assets/secondimage.webp'
import image1 from '../../assets/thirdimage.jpeg'
const Card = (props) => {
    return (<div className='container w-100 justify-content-center gap-5 d-flex flex-wrap'>
        {props.item.map((value, index) =>
        
        <div className="cardd card position-relative rounded-0 mt-5 h-25" style={{ width: 23 + "rem"}} key={index}>
                <div className='img'>
                <img src={value.urlToImage} className="card-img-top w-100 h-100 rounded-0" alt="..." />
           </div>
            
            <div className="card-body p-0">
           
                <div className='w-100 d-flex py-5 flex-column mt-2 mb-2 p-2 text-center'>
                    <div className="circle shadow rounded-circle position-absolute start-50 translate-middle">
                        <img src={image1} className='w-75 h-75 rounded-circle '/>
                </div>
                        <div className='title overflow-auto'>
                        <h5 className="card-title">{value.title}</h5>
                       </div>
   </div>
                <div className='but1 w-100 d-flex justify-content-between '>
                    <button className='but'><i className="fa-solid fa-heart px-3"></i> 57</button>
                    <button className='but'><i className="fa-solid fa-comment px-3"></i> 6</button>
                    <button className='but'><i className="fa-solid fa-eye px-3"></i> 138</button>
    </div>
  </div>
</div>
        )



        }
       
    
    </div> );
}
 
export default Card;