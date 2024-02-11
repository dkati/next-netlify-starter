import { useState } from 'react';
// app url: https://main--chipper-dango-4cce50.netlify.app/
export default function InputPage() {
 // You might want to manage state here if you need to handle form submission or input validation
  
  
  const handleSubmit = () => {
    // Here you can handle the submission logic, e.g., calculating amounts, validating inputs, etc.
     const amount1Value = document.getElementById('amount-0').value;
     const months = document.getElementById('months-0').value;
     const permonth = amount1Value / months;
     console.log('per month:', permonth);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', maxWidth: '180px' }}>
            <label htmlFor={`amount-${index}`}>Ποσό σύμβασης που αναγράφεται στο mycerth</label>
            <input type="text" id={`amount-${index}`} name={`amount-${index}`} style={{ marginBottom: '10px' }}/>

            <label htmlFor={`months-${index}`}>Μήνες σύμβασης</label>
            <input type="text" id={`months-${index}`} name={`months-${index}`} style={{ marginBottom: '10px' }}/>

            <div style={{ marginBottom: '10px' }}>
              <input type="checkbox" id={`vat-${index}`} name={`vat-${index}`} />
              <label htmlFor={`vat-${index}`}>έχει ΦΠΑ</label>
            </div>

            <div>
              <input type="checkbox" id={`withholding-${index}`} name={`withholding-${index}`} />
              <label htmlFor={`withholding-${index}`}>Σου κάνουν παρακράτηση 20%</label>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} style={{ cursor: 'pointer' }}>Βγαλε τα ποσά</button>
    </div>
  );
}
