import styles from '@/app/contact/styles.module.scss';
import { Input } from '@/app/components/ui/input/Input';
import { Textarea } from '@/app/components/ui/textarea/Textarea';
import { Button } from '@/app/components/ui/button/Button';

export default async function ContactPage() {
    return (
        <div className='page-wrapper'>
            <div className={styles.wrapper} id='contact'>
                <h1 className='section-header'>Contact form</h1>
                <p className={styles.annotation}>Feel free to contact me via LinkedIn, or send me an email 📧</p>
                <div className={styles.formWrapper}>
                    <Input type='email' placeholder='Email' label='Email' />
                    <Textarea type='text' label='Message' placeholder='Message' required={true} />
                    <Button label='Send' size='lg' primary={true} />
                </div>
            </div>
        </div>
    );
}
