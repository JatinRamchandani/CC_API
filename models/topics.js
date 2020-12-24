const mongoose=require('mongoose');

const topicSchema=new mongoose.Schema({
    topic:{
        type: String,
        required: true
    },
    sourceDesc:{
        type: String,
        required: true
    },

    s1_img:{
        type: String,
        
    },
    source1:{
        type: String,
        
    },

    s2_img:{
        type: String,
        
    },
    source2:{
        type: String,
        
    },
    
    s3_img:{
        type: String,
        
    },
    source3:{
        type: String,
        
    },
    
    s4_img:{
        type: String,
        
    },
    source4:{
        type: String,
        
    },
    
    s5_img:{
        type: String,
        
    },
    source5:{
        type: String,
        
    },
    
    s6_img:{
        type: String,
        
    },
    source6:{
        type: String,
        
    },
    
    s7_img:{
        type: String,
        
    },
    source7:{
        type: String,
        
    },
    
    s8_img:{
        type: String,
        
    },
    source8:{
        type: String,
        
    },
    
    s9_img:{
        type: String,
        
    },
    source9:{
        type: String,
        
    },
    
    s10_img:{
        type: String,
        
    },
    source10:{
        type: String,
        
    }
    

})

module.exports=mongoose.model('topic',topicSchema)