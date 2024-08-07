import {ReactElement} from "react";
import styles from './SkillItem.module.scss';
import Image from "next/image";

export default function SkillItem({image, label}: { image: any, label: string }): ReactElement {
    return (
        <div className={styles.wrapper}>
            <Image src={image} alt={label} width={130} height={130}/>
            <h2>{label}</h2>
        </div>
    )
}