import "./reset.css";
import "./App.css";
import logo from "./assets/images/logo.svg";
import Charts from "./components/Charts";

function App() {
  return (
    <>
      <main className="bg-cream">
        <div className="container gap-6 flex flex-column">
          <div className="header bg-soft-red round-md">
            <div className="header__main flex span-bw item-center ">
              <div className="flex flex-column gap-2 ">
                <span className="text-body text-pale-orange">My balance</span>
                <h3 className="bold text-pale-orange text-header  ">$921.48</h3>
              </div>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="body bg-Very-pale-orange round-md flex flex-column  ">
            <h2 className="text-header text-dark-brown">
              Spending - Last 7 days
            </h2>
            <Charts />
            <div className="mt-34">
              <div className="text-medium-brown ">
                <h4 className="normal">Total this month</h4>
                <div className="mt-4 flex span-bw  ">
                  <span className="text-big-header text-dark-brown bold">
                    $478.33
                  </span>
                  <div className="flex flex-column">
                    <h4 className="text-dark-brown bold">+2.4%</h4>
                    from last month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
