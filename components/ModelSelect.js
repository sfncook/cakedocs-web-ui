import styles from '@/styles/ProjectSelect.module.css'
import { FaMotorcycle } from 'react-icons/fa';
export default function ModelSelect ({ models, setSelectedModel, selectedModel }) {

  const handleChange = event => {
    const model = event.target.value
    setSelectedModel(model)
  }

  return (
    <div className={styles.selectContainer}>
      <FaMotorcycle />
      <select value={selectedModel} onChange={handleChange} className={styles.projectSelect}>
        {
          models && models.map(model => (<option key={model} value={model}>{model}</option>))
        }
      </select>
    </div>
  );
};
