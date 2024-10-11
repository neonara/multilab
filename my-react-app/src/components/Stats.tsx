import './Stats.css'
interface StatsProps {
    clients: string;
    echantillons: string;
    experience: string;
}
    function Stats({ clients, echantillons, experience }: StatsProps) {
        return (
    <div className="container" >
      <p><strong>{clients}</strong> clients</p>
      <p><strong>{echantillons}</strong> échantillons traités par an</p>
      <p><strong>{experience}</strong> ans d'expérience</p>
    </div>
  );
}

export default Stats;