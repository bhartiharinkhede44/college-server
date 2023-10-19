import express from "express";
const app =express();
app.use(express.json());

const students =[];

app.get('/health',(req,res)=>{
   res.json({ status:'All good ,all set' });
});

app.get("/students",(req,res)=>{
    res.json({
        success:true,
        data:students,
        message:`succesfully fetched all students`
    })
});

app.post('/student',(req,res)=>{
    const {name,age,mobile,email}=req.body;
    if (!name){
        return res.json({
            success:false,
            message:'Name is required'
        }

        )
    }
    if (!age){
        return res.json({
            success:false,
            message:'age is required'
        }

        )
    }
    if (!mobile){
        return res.json({
            success:false,
            message:'mobile is required'
        }

        )
    }
    if (!email){
        return res.json({
            success:false,
            message:'email is required'
        }

        )
    }
    const id = Math.floor(Math.random() * 100000) + 1;

    const newStudent = {
       id, // 'id':id,
       name,// 'name':name,
       age, // 'age':age,
       mobile, // 'mobile':mobile,
       email // 'email':email,
    }

    students.push(newStudent);

    res.json({
        success:true,
    data:newStudent,
    message:'Sucessfully added new student'
    
    })
});
app.get('/student',(req,res)=>{
    const {id} = req.query;
    let student = null;
    students.forEach((stud)=>{
        if (stud.id == id){
            student = stud;
        }
    })
    if (student ==null){
        return res.json({
            success:false,
            message:'student not found',
        })
    }
    res.json({
        success:true,
        data:student,
        message:'successfully fetched student'
    })
})

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
});