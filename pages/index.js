import { useState } from 'react';
// app url: https://main--chipper-dango-4cce50.netlify.app/

 function roundUp(num) {
    return Math.ceil(num * 100) / 100;
   }

export default function InputPage() {
 // You might want to manage state here if you need to handle form submission or input validation
  
 
 
  const handleSubmit = () => {
    // Here you can handle the submission logic, e.g., calculating amounts, validating inputs, etc.
     const amount0Value = (document.getElementById('amount-0').value === "" ? 0 : document.getElementById('amount-0').value);
     const months0 = (document.getElementById('months-0').value === "" ? 0 : document.getElementById('months-0').value);
     const permonth0 = amount0Value / (months0 === 0 ? 1 : months0);

     const amount1Value = (document.getElementById('amount-1').value === "" ? 0 : document.getElementById('amount-1').value);
     const months1 = (document.getElementById('months-1').value === "" ? 0 : document.getElementById('months-1').value);
     const permonth1 = amount1Value / (months1 === 0 ? 1 : months1);
   
     const amount2Value = (document.getElementById('amount-2').value === "" ? 0 : document.getElementById('amount-2').value);
     const months2 = (document.getElementById('months-2').value === "" ? 0 : document.getElementById('months-2').value);
     const permonth2 = amount2Value / (months2 === 0 ? 1 : months2);
   
     const amount3Value = (document.getElementById('amount-3').value === "" ? 0 : document.getElementById('amount-3').value);
     const months3 = (document.getElementById('months-3').value === "" ? 0 : document.getElementById('months-3').value);
     const permonth3 = amount3Value / (months3 === 0 ? 1 : months3);
   
     const amount4Value = (document.getElementById('amount-4').value === "" ? 0 : document.getElementById('amount-4').value);
     const months4 = (document.getElementById('months-4').value === "" ? 0 : document.getElementById('months-4').value);
     const permonth4 = amount4Value / (months4 === 0 ? 1 : months4);

     const withFpa = permonth0 + permonth1 + permonth2 + permonth3 + permonth4

     const tmp = (permonth0 / 1.24) + (permonth1 / 1.24) + (permonth2 / 1.24) + (permonth3 / 1.24) + (permonth4 / 1.24) 

     const fpa = withFpa - tmp; 
     console.log('per month:', roundUp(permonth));
     console.log('fap total:', roundUp(fpa));
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
