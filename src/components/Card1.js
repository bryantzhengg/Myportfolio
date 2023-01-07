import "./card1Styles.css";
import python3 from "../assets/python3.png";
import hotel2 from "../assets/hotel2.png";
import java2 from "../assets/java2.png";
import excel2 from "../assets/excel2.png";

const Card1 = () => {
  return (
    <div className="projects">
        <div className = "animateProject">
          <h3>
            P  r  o  j  e  c  t  s
          </h3>
        </div>
        
        <div className="text1">
            <h2>Petal Predictor</h2>
            <p>I used the Pandas and SciPy libraries to classify Iris flowers by length from a web database.
              Different types of algorithms were evaluated for accuracy, including logistic regression,
              k-Nearest-Neighbor Classifier (KNN), and GaussianNB. In the end, it was found that the KNN
              model was the most accurate.
            </p>
        </div>

        <div className="picture1">
            <img className="picture1"
            src={python3} alt="picture1"/>
        </div>



        <div className="text2">
            <h2>Hotel Trends-ylvania</h2>
            <p>Used SQL queries to manipulate data from a CSV file to <br></br>
              then visualize the data in a dashboard with PowerBI.
            </p>
        </div>

        <div className="picture2">
            <img className="picture2"
            src={hotel2} alt="picture2"/>
        </div>



        <div className="text3">
            <h2>A Really Good Rhythm Game</h2>
            <p>Used Java to create a rhythm game as part of a culminating project. 
            </p>
        </div>

        <div className="picture3">
            <img className="picture3"
            src={java2} alt="picture3"/>
        </div>




        <div className="text4">
            <h2>Who Bikes?</h2>
            <p>excel
            </p>
        </div>

        <div className="picture4">
            <img className="picture4"
            src={excel2} alt="picture4"/>
        </div>






        <div className="rectangle"></div>

    </div>
    

  
  )
};

export default Card1;
