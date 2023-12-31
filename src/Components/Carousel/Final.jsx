import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  "./Item";
import { productData, responsive } from "./data";

export default function Final() {
  const product = productData.map((item) => (
    <item 
    
      name={item.id}

      url={item.imageurl}
      // price={item.price}
      // description={item.description}
    />
  ));
  return (
    <div>
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}