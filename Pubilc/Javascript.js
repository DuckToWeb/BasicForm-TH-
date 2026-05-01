const FORM = document.getElementById('FORM')
const Em = document.getElementById('EMAIL')
const Ck = document.getElementById('CHECK')
const Dt = document.getElementById('DATE')


FORM.addEventListener('submit', async(event)=> {
    event.preventDefault()
    const F = new FormData(FORM);
    const NAME = F.get('NAME');
    const LAST = F.get('LAST');
    const NUMBER = F.get('NUMBER');
    const EMAIL = F.get('EMAIL');
    const DATE = F.get('DATE');

    const EmailValue = Em.value.trim()
    const IsEmail = EmailValue.endsWith('@gmail.com')
    const IsDate = Dt.value

    if (!IsEmail) {
        return alert('ใส่อีเมล์ให้ถูกต้อง')
    } else if (!Ck.checked) {
        return alert('ยังไม่ได้ยืนยันว่าอ่านเงื่อนไข')
    }

    if (NAME === '' || LAST === '' || NUMBER === '' || IsDate === '') {
        return alert('ใส่ข้อมูลให้ครบ')
    }

    try {
        const res = await fetch('http://localhost:3060/SIGN', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },

            body : JSON.stringify({
                Name : NAME,
                Last : LAST,
                Numbers : NUMBER,
                Email : EMAIL,
                Date : DATE,
            })
        });

        const result = await res.json()
        if (res.ok) {
            console.log(result.mess)
            console.log(result.DATA)
        }
    } catch(err) {
        console.log('Error : ' + err)
    }
        
})