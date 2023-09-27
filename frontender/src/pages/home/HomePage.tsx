/* import bootstrat css */
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({username, age, }: { username: string; age : number; }): any {
  return (
    <div className="card text-white bg-secondary">
      <img className="card-img-top" src="holder.js/100px180/" alt=""/>
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text">Text</p>
      </div>
    </div>
  );
}
