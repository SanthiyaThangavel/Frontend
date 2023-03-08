import React from "react";
import '../components/mainpg.css';
import { Link } from "react-router-dom";
function Spts() {
    return (
      <div>
     
        <div className="sports">
          <h1>Sports Equipments 
                     and Goods</h1>
                     <h2>RunForLife..!</h2>
                     <p class="star">Products are sourced from sporting goods manufacturers and wholesalers and then
sold to the general public via Online store</p>
        </div>
        <section class="equipments">
<h1>Goods we Offer</h1>
<p class="star">Best in quality and Cheap in price</p>

<div class="row">
    <div class="course-col">
    <h3 class="new">Sportswear</h3>
    <p>Sportswear or activewear is clothing, including footwear, worn for sport or physical exercise. Sport-specific clothing is worn for most sports and physical exercise, for practical, comfort or safety reasons. Typical sport-specific garments include tracksuits, shorts, T-shirts and polo shirts.</p>
    </div>

     <div class="course-col">
    <h3 class="new">Fitness Equipments</h3>
    <p>Fitness equipment is a subset of the larger sporting goods sector. Fitness equipment includes items such as treadmills, free weights, weight machines, and elliptical trainers. A treadmill is a device that consists of a moving belt on which a person walks or runs while remaining in one place.</p>
    </div>

     <div class="course-col">
    <h3 class ="new">Sports Equipments</h3>
    <p>The equipment ranges from balls, nets, and protective gear like helmets. Sporting equipment can be used as protective gear or a tool used to help the athletes play the sport. Over time, sporting equipment has evolved because sports have started to require more protective gear to prevent injuries.</p>
    </div>
    </div>
    <div>
      <Link to='/post'><button class='butt'>Post</button></Link>
      <Link to="/getvalues"><button class="butt">Show</button></Link>
      <Link to='/put'><button class='butt'>Put</button></Link>
      <Link to='/delete'><button class='butt'>Delete</button></Link>

      </div>
</section>

      </div>
    );
  }

export default Spts; 