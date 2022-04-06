import "./stat.css";
export default function Stat() {
  return (
    <div id='stat' className='box'>
      <div>
        <p>Transactions/Second</p>
        <p>2,905</p>
      </div>
      <div>
        <p>Total Transactions</p>
        <p>$64,540,470,129</p>
      </div>
      <div>
        <p>Avg. Cost/Transaction</p>
        <p>$0.00025</p>
      </div>
      <div>
        <p>Validator Nodes</p>
        <p>1,645</p>
      </div>
    </div>
  );
}
