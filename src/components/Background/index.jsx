import './index.scss';

export default function Background() {
  return (
    <div>
      <h1>Urban Apparel</h1>
      <h2>Comfortable clothes at an affordable price</h2> 
      <div className="sweat-section grey-sweat">
        <p className="sweat-category">Solid Sweat<span className="price">$20</span><br />
        <small>Maximum Comfort. 100% Cotton. Available colors: Purple, Green, Maroon, Yellow, Pink, Red, Black, and White.</small></p>
      </div>

      <div className="sweat-section maroongrey-sweat">
        <p className="sweat-category">Multi-color Zip<span className="price">$25</span><br />
        <small>Maximum Comfort. 100% Cotton. Available colors: Maroon/Grey, Black/White, Blue/Grey, Black/Grey, Yellow/Lime Green, Red/Black</small></p>
      </div>
        
      <div className="sweat-section purple-sweat">
        <p className="sweat-category">Solid Zip<span className="price">$20</span><br />
        <small>Maximum Comfort. 100% Cotton. Available colors: Purple, Green, Maroon, Yellow, Pink, Red, Black, and White.</small></p>
      </div>

      <div className="sweat-section tank">
        <p className="sweat-category">Solid Tank<span className="price">$15</span><br />
        <small>Maximum Comfort. 100% Cotton. Available colors: Purple, Green, Maroon, Yellow, Pink, Red, Black, and White.</small></p>
      </div>
    </div>
  );
}
