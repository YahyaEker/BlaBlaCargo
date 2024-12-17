import TransporSection from "@/components/transportSection";
import styles from "./page.module.css";
import ImageSection from "@/components/imageSection";

export default function Home() {
  return (
    <div className={styles.page}>

        <ImageSection/>
        
        <TransporSection/>

        
      
    </div>
  );
}
