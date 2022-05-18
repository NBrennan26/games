import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    document.title = "Games | Home";
  }, []);

  return (
    <section>
      <div>Dashboard</div>
    </section>
  );
}

export default Dashboard;
