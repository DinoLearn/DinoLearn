// ========================================
// 1. DATA DEFINITIONS
// ========================================

// Faculty Data
const FACULTIES = {
    engineering: { name: "วิศวกรรมศาสตร์", icon: "⚙️", color: "#6366f1", desc: "เหมาะกับคนที่ชอบแก้ปัญหา คิดวิเคราะห์เชิงระบบ และสนใจเทคโนโลยี" },
    medicine: { name: "แพทยศาสตร์", icon: "🏥", color: "#ef4444", desc: "เหมาะกับคนที่มีจิตใจเอื้อเฟื้อ ชอบช่วยเหลือผู้อื่น และสนใจวิทยาศาสตร์สุขภาพ" },
    law: { name: "นิติศาสตร์", icon: "⚖️", color: "#f59e0b", desc: "เหมาะกับคนที่สนใจความยุติธรรม มีทักษะการวิเคราะห์ และชอบถกเถียงอย่างมีเหตุผล" },
    business: { name: "บริหารธุรกิจ", icon: "💼", color: "#10b981", desc: "เหมาะกับคนที่มีความเป็นผู้นำ ชอบวางแผน และสนใจเรื่องการจัดการ" },
    science: { name: "วิทยาศาสตร์", icon: "🔬", color: "#06b6d4", desc: "เหมาะกับคนที่รักการค้นคว้า ทดลอง และต้องการค้นพบความจริงของธรรมชาติ" },
    arts: { name: "ศิลปศาสตร์", icon: "📚", color: "#ec4899", desc: "เหมาะกับคนที่สนใจภาษา วัฒนธรรม มนุษยศาสตร์ และการสื่อสาร" },
    architecture: { name: "สถาปัตยกรรมศาสตร์", icon: "🏛️", color: "#8b5cf6", desc: "เหมาะกับคนที่มีความคิดสร้างสรรค์ ชอบออกแบบ และมีสายตาด้านสุนทรียศาสตร์" },
    it: { name: "เทคโนโลยีสารสนเทศ", icon: "💻", color: "#3b82f6", desc: "เหมาะกับคนที่ชอบเขียนโปรแกรม สนใจโลกดิจิทัล และแก้ปัญหาด้วยเทคโนโลยี" },
    education: { name: "ครุศาสตร์ / ศึกษาศาสตร์", icon: "🎓", color: "#14b8a6", desc: "เหมาะกับคนที่ชอบสอน ถ่ายทอดความรู้ และมีใจรักในการพัฒนาผู้อื่น" },
    economics: { name: "เศรษฐศาสตร์", icon: "📈", color: "#f97316", desc: "เหมาะกับคนที่สนใจการเงิน เศรษฐกิจ และชอบวิเคราะห์ข้อมูลเชิงตัวเลข" }
};

// 50 Faculty Quiz Questions
const ALL_QUESTIONS = [
    { text: "ในเวลาว่าง คุณชอบทำกิจกรรมแบบไหนมากที่สุด?", choices: [
        { text: "ประดิษฐ์ ซ่อมแซม หรือทดลองสร้างสิ่งของ", scores: { engineering: 3, it: 2, science: 1 } },
        { text: "อ่านหนังสือ เขียนเรื่องสั้น หรือเรียนรู้ภาษาใหม่", scores: { arts: 3, education: 2, law: 1 } },
        { text: "วาดรูป ออกแบบ หรือตกแต่งห้อง", scores: { architecture: 3, arts: 2 } },
        { text: "ดูข่าวเศรษฐกิจ ลงทุน หรือวางแผนการเงิน", scores: { economics: 3, business: 2, law: 1 } }
    ]},
    { text: "วิชาที่คุณชอบเรียนมากที่สุดในโรงเรียนคือ?", choices: [
        { text: "คณิตศาสตร์ และฟิสิกส์", scores: { engineering: 3, science: 2, economics: 1, it: 2 } },
        { text: "ภาษาไทย และภาษาอังกฤษ", scores: { arts: 3, law: 2, education: 1 } },
        { text: "ชีววิทยา และเคมี", scores: { medicine: 3, science: 2 } },
        { text: "สังคมศึกษา และประวัติศาสตร์", scores: { law: 2, education: 2, economics: 2, arts: 1 } }
    ]},
    { text: "เมื่อเพื่อนมีปัญหา คุณมักจะ...", choices: [
        { text: "รับฟังและให้คำปรึกษาอย่างใจเย็น", scores: { medicine: 2, education: 3, arts: 1 } },
        { text: "วิเคราะห์สาเหตุและหาทางแก้ไขอย่างเป็นระบบ", scores: { engineering: 2, science: 2, it: 2, law: 1 } },
        { text: "ช่วยวางแผนและจัดการปัญหาให้เป็นขั้นตอน", scores: { business: 3, economics: 2, law: 1 } },
        { text: "ใช้ความคิดสร้างสรรค์เสนอทางออกแปลกใหม่", scores: { architecture: 3, arts: 2 } }
    ]},
    { text: "งานกลุ่มที่ทำแล้วสนุกที่สุดคือ?", choices: [
        { text: "ทำหุ่นยนต์ หรือโปรเจกต์วิทยาศาสตร์", scores: { engineering: 3, it: 2, science: 2 } },
        { text: "จัดงานอีเวนต์ หรือกิจกรรมในโรงเรียน", scores: { business: 3, education: 2, arts: 1 } },
        { text: "ทำโมเดล สร้างผลงานศิลปะ", scores: { architecture: 3, arts: 2 } },
        { text: "วิจัย ค้นคว้า และนำเสนอข้อมูล", scores: { science: 2, economics: 2, law: 2, medicine: 1 } }
    ]},
    { text: "คุณอยากเป็นคนแบบไหนในอนาคต?", choices: [
        { text: "ผู้เชี่ยวชาญที่ช่วยรักษาและดูแลสุขภาพคน", scores: { medicine: 3, science: 1 } },
        { text: "ผู้บริหารที่ประสบความสำเร็จ", scores: { business: 3, economics: 2, law: 1 } },
        { text: "นักสร้างสรรค์ที่ออกแบบสิ่งสวยงาม", scores: { architecture: 3, arts: 2 } },
        { text: "นักพัฒนาเทคโนโลยีที่เปลี่ยนแปลงโลก", scores: { it: 3, engineering: 2, science: 1 } }
    ]},
    { text: "ถ้าให้เลือกดูรายการทีวี คุณจะเลือก?", choices: [
        { text: "สารคดีธรรมชาติ วิทยาศาสตร์ หรือเทคโนโลยี", scores: { science: 3, engineering: 2, medicine: 1 } },
        { text: "ข่าวเศรษฐกิจ การเงิน การลงทุน", scores: { economics: 3, business: 2 } },
        { text: "รายการศิลปะ การออกแบบ หรือท่องเที่ยว", scores: { architecture: 2, arts: 3 } },
        { text: "ซีรีส์กฎหมาย อาชญากรรม หรือสืบสวนสอบสวน", scores: { law: 3, medicine: 1, education: 1 } }
    ]},
    { text: "ความสามารถพิเศษของคุณคืออะไร?", choices: [
        { text: "คิดเลขเร็ว จำสูตรได้ดี", scores: { engineering: 2, economics: 2, science: 2, it: 1 } },
        { text: "พูดเก่ง สื่อสารได้ดี", scores: { law: 2, arts: 2, business: 2, education: 1 } },
        { text: "มีความละเอียดรอบคอบ ช่างสังเกต", scores: { medicine: 2, science: 2, architecture: 2, law: 1 } },
        { text: "มีจินตนาการสูง คิดนอกกรอบ", scores: { architecture: 3, it: 2, arts: 2 } }
    ]},
    { text: "ถ้าได้รางวัล 1 ล้านบาท คุณจะทำอะไร?", choices: [
        { text: "ลงทุนต่อยอดให้เงินงอกเงย", scores: { economics: 3, business: 3 } },
        { text: "บริจาคช่วยเหลือผู้ป่วยและผู้ด้อยโอกาส", scores: { medicine: 2, education: 3 } },
        { text: "ซื้ออุปกรณ์สร้างสิ่งประดิษฐ์ที่อยากทำ", scores: { engineering: 3, it: 2, architecture: 1 } },
        { text: "เดินทางรอบโลกเพื่อเปิดประสบการณ์", scores: { arts: 3, architecture: 1, science: 1 } }
    ]},
    { text: "คุณทำงานได้ดีที่สุดในสภาพแวดล้อมแบบไหน?", choices: [
        { text: "ห้องแล็บ หรือเวิร์กช็อปที่มีอุปกรณ์ทดลอง", scores: { science: 3, engineering: 2, medicine: 2 } },
        { text: "ออฟฟิศทันสมัยกับทีมงานไดนามิก", scores: { business: 3, economics: 2, it: 1 } },
        { text: "สตูดิโอที่เงียบสงบสำหรับสร้างสรรค์ผลงาน", scores: { architecture: 3, arts: 2, it: 1 } },
        { text: "ห้องเรียน หรือพื้นที่ที่ได้แลกเปลี่ยนความรู้", scores: { education: 3, law: 2, arts: 1 } }
    ]},
    { text: "เวลาต้องตัดสินใจเรื่องสำคัญ คุณมักจะ...", choices: [
        { text: "ใช้ข้อมูลและตัวเลขมาวิเคราะห์", scores: { economics: 3, science: 2, engineering: 2 } },
        { text: "ใช้สัญชาตญาณและความรู้สึก", scores: { arts: 2, architecture: 2, education: 2 } },
        { text: "ปรึกษาผู้เชี่ยวชาญและหาข้อมูลรอบด้าน", scores: { medicine: 2, law: 2, business: 2 } },
        { text: "ลองผิดลองถูกเพื่อหาคำตอบด้วยตัวเอง", scores: { it: 3, engineering: 2, science: 1 } }
    ]},
    { text: "หนังสือประเภทไหนที่คุณหยิบอ่านบ่อย?", choices: [
        { text: "หนังสือวิทยาศาสตร์ เทคโนโลยี หรือนวัตกรรม", scores: { science: 3, it: 2, engineering: 2 } },
        { text: "นิยาย วรรณกรรม หรือบทกวี", scores: { arts: 3, education: 1 } },
        { text: "หนังสือจิตวิทยา การพัฒนาตนเอง", scores: { education: 2, medicine: 2, business: 2 } },
        { text: "หนังสือการเงิน กฎหมาย หรือการเมือง", scores: { economics: 2, law: 3, business: 1 } }
    ]},
    { text: "ถ้าให้เข้าชมรมหนึ่ง คุณจะเลือกชมรมไหน?", choices: [
        { text: "ชมรมหุ่นยนต์ หรือคอมพิวเตอร์", scores: { it: 3, engineering: 3, science: 1 } },
        { text: "ชมรมอาสาสมัคร หรือจิตอาสา", scores: { medicine: 2, education: 3 } },
        { text: "ชมรมโต้วาที หรือวิชาการ", scores: { law: 3, arts: 2, economics: 1 } },
        { text: "ชมรมศิลปะ การถ่ายภาพ หรือดนตรี", scores: { architecture: 2, arts: 3 } }
    ]},
    { text: "สิ่งที่ทำให้คุณรู้สึกภูมิใจที่สุดคือ?", choices: [
        { text: "แก้โจทย์ยากๆ ได้สำเร็จ", scores: { engineering: 3, science: 2, it: 2, economics: 1 } },
        { text: "ช่วยเหลือคนอื่นจนเขาดีขึ้น", scores: { medicine: 3, education: 2 } },
        { text: "สร้างสรรค์ผลงานที่คนชื่นชม", scores: { architecture: 3, arts: 2 } },
        { text: "ชนะการแข่งขันหรือบรรลุเป้าหมาย", scores: { business: 3, law: 2, economics: 1 } }
    ]},
    { text: "คุณเลือกซื้อของขวัญให้เพื่อนแบบไหน?", choices: [
        { text: "แกดเจ็ต อุปกรณ์เทคโนโลยีเท่ๆ", scores: { it: 3, engineering: 2 } },
        { text: "หนังสือ หรือของที่ให้ความรู้", scores: { education: 2, science: 2, arts: 2 } },
        { text: "ของทำมือ งานศิลปะ หรือของตกแต่ง", scores: { architecture: 3, arts: 2 } },
        { text: "บัตรของขวัญ หรือเงินสด (ปฏิบัติจริง)", scores: { business: 2, economics: 3, law: 1 } }
    ]},
    { text: "ปัญหาสังคมที่คุณอยากแก้ไขมากที่สุดคือ?", choices: [
        { text: "ปัญหาสิ่งแวดล้อมและภัยธรรมชาติ", scores: { science: 3, engineering: 2, architecture: 1 } },
        { text: "ความไม่เท่าเทียมและความยุติธรรม", scores: { law: 3, arts: 1, economics: 1 } },
        { text: "ปัญหาสาธารณสุขและโรคระบาด", scores: { medicine: 3, science: 1 } },
        { text: "ปัญหาความยากจนและเศรษฐกิจ", scores: { economics: 3, business: 2, education: 1 } }
    ]},
    { text: "ถ้าคุณเป็นซูเปอร์ฮีโร่ พลังพิเศษที่คุณอยากมีคือ?", choices: [
        { text: "สติปัญญาอัจฉริยะ ประดิษฐ์สิ่งล้ำสมัย", scores: { engineering: 3, it: 2, science: 2 } },
        { text: "พลังรักษา เยียวยาผู้คน", scores: { medicine: 3, education: 1 } },
        { text: "พลังโน้มน้าวจิตใจคน", scores: { law: 2, business: 3, arts: 1 } },
        { text: "พลังสร้างสรรค์ ทำให้จินตนาการเป็นจริง", scores: { architecture: 3, arts: 2, it: 1 } }
    ]},
    { text: "วิธีการเรียนรู้ที่คุณชอบที่สุดคือ?", choices: [
        { text: "ลงมือทำ ทดลองจริง เรียนรู้จากประสบการณ์", scores: { engineering: 2, science: 3, medicine: 1, it: 1 } },
        { text: "อ่าน ค้นคว้า วิเคราะห์ข้อมูล", scores: { law: 2, economics: 2, arts: 2 } },
        { text: "สนทนา แลกเปลี่ยน อภิปรายกับคนอื่น", scores: { education: 3, business: 2, law: 1 } },
        { text: "วาด เขียน สเกตช์ เพื่อทำความเข้าใจ", scores: { architecture: 3, arts: 2 } }
    ]},
    { text: "แอปที่คุณใช้บ่อยที่สุดในมือถือคือ?", choices: [
        { text: "แอปข่าว สารคดี หรือ Wikipedia", scores: { science: 2, law: 2, economics: 2 } },
        { text: "แอปโซเชียลมีเดีย และแชท", scores: { arts: 2, business: 2, education: 1 } },
        { text: "แอปเกม เขียนโค้ด หรือเทคโนโลยี", scores: { it: 3, engineering: 2 } },
        { text: "แอปวาดรูป แต่งรูป หรือออกแบบ", scores: { architecture: 3, arts: 2 } }
    ]},
    { text: "ถ้าเดินทางไปต่างประเทศ สิ่งที่คุณอยากทำที่สุดคือ?", choices: [
        { text: "เยี่ยมชมมหาวิทยาลัยและห้องแล็บวิจัยชั้นนำ", scores: { science: 3, engineering: 2, medicine: 2 } },
        { text: "สำรวจสถาปัตยกรรมและวัฒนธรรมท้องถิ่น", scores: { architecture: 3, arts: 2, education: 1 } },
        { text: "ศึกษาระบบเศรษฐกิจและธุรกิจของประเทศนั้น", scores: { economics: 3, business: 2, law: 1 } },
        { text: "ไปเป็นอาสาสมัครช่วยเหลือชุมชน", scores: { medicine: 2, education: 3 } }
    ]},
    { text: "เมื่อเจอข่าวน่าสนใจ คุณมักจะสนใจเรื่องอะไร?", choices: [
        { text: "การค้นพบทางวิทยาศาสตร์หรือเทคโนโลยีใหม่", scores: { science: 2, it: 3, engineering: 2 } },
        { text: "คดีความ สิทธิมนุษยชน หรือกฎหมายใหม่", scores: { law: 3, arts: 1 } },
        { text: "สถานการณ์เศรษฐกิจ ตลาดหุ้น อัตราแลกเปลี่ยน", scores: { economics: 3, business: 2 } },
        { text: "เรื่องราวที่สร้างแรงบันดาลใจ คนดีของสังคม", scores: { education: 3, medicine: 2, arts: 1 } }
    ]},
    { text: "ถ้าให้คุณเปิดร้านขายของ คุณจะขายอะไร?", choices: [
        { text: "อุปกรณ์อิเล็กทรอนิกส์และแกดเจ็ต", scores: { it: 3, engineering: 2 } },
        { text: "ยา อาหารเสริม ของใช้เพื่อสุขภาพ", scores: { medicine: 3, science: 1 } },
        { text: "ของตกแต่งบ้าน งานดีไซน์ เฟอร์นิเจอร์", scores: { architecture: 3, arts: 2 } },
        { text: "หนังสือ เครื่องเขียน สื่อการเรียนรู้", scores: { education: 3, arts: 1, law: 1 } }
    ]},
    { text: "คำที่อธิบายตัวคุณได้ดีที่สุดคือ?", choices: [
        { text: "มีเหตุผล ชอบคิดวิเคราะห์", scores: { engineering: 2, science: 2, economics: 2, law: 1 } },
        { text: "เอาใจใส่ ใส่ใจคนรอบข้าง", scores: { medicine: 3, education: 2 } },
        { text: "กล้าหาญ มั่นใจ ชอบนำ", scores: { business: 3, law: 2 } },
        { text: "สร้างสรรค์ ชอบทดลองสิ่งใหม่", scores: { architecture: 2, arts: 2, it: 2 } }
    ]},
    { text: "ถ้าเพื่อนทะเลาะกัน คุณจะทำอย่างไร?", choices: [
        { text: "เป็นคนกลางไกล่เกลี่ยอย่างยุติธรรม", scores: { law: 3, education: 2 } },
        { text: "วิเคราะห์ปัญหาแล้วเสนอทางออกที่ดีที่สุด", scores: { engineering: 2, science: 1, business: 2, economics: 1 } },
        { text: "ปลอบใจทั้งสองฝ่ายให้ใจเย็นลง", scores: { medicine: 2, education: 2, arts: 1 } },
        { text: "ชวนไปทำกิจกรรมสนุกๆ เพื่อลืมเรื่องทะเลาะ", scores: { arts: 2, architecture: 1, business: 2 } }
    ]},
    { text: "โปรเจกต์ในฝันของคุณคือ?", choices: [
        { text: "สร้าง AI หรือแอปพลิเคชันที่ช่วยชีวิตคน", scores: { it: 3, engineering: 2, science: 1 } },
        { text: "ออกแบบอาคารหรือเมืองแห่งอนาคต", scores: { architecture: 3, engineering: 1 } },
        { text: "เปิดโรงเรียนสอนเด็กด้อยโอกาส", scores: { education: 3, medicine: 1 } },
        { text: "ก่อตั้งบริษัท startup ที่ประสบความสำเร็จ", scores: { business: 3, economics: 2, it: 1 } }
    ]},
    { text: "ถ้าต้องนำเสนองานหน้าห้อง คุณเลือกหัวข้อไหน?", choices: [
        { text: "การทำงานของจรวดหรือเทคโนโลยีอวกาศ", scores: { engineering: 3, science: 2, it: 1 } },
        { text: "สิทธิมนุษยชนและความเท่าเทียมในสังคม", scores: { law: 3, arts: 1, education: 1 } },
        { text: "วิธีเริ่มต้นธุรกิจสำหรับวัยรุ่น", scores: { business: 3, economics: 2 } },
        { text: "ศิลปะและการออกแบบในชีวิตประจำวัน", scores: { architecture: 3, arts: 2 } }
    ]},
    { text: "YouTube Channel ที่คุณชอบดูเป็นแนวไหน?", choices: [
        { text: "ช่องทดลองวิทยาศาสตร์ DIY หรือรีวิวเทคโนโลยี", scores: { science: 2, engineering: 2, it: 2 } },
        { text: "ช่องสอนทำอาหาร สุขภาพ และไลฟ์สไตล์", scores: { medicine: 2, education: 1, arts: 1 } },
        { text: "ช่องวิเคราะห์หุ้น คริปโต และการลงทุน", scores: { economics: 3, business: 2 } },
        { text: "ช่องสอนวาดรูป ออกแบบ หรือ Vlog ท่องเที่ยว", scores: { architecture: 2, arts: 3, education: 1 } }
    ]},
    { text: "ในงานเลี้ยงวันเกิดเพื่อน คุณมักจะรับหน้าที่...", choices: [
        { text: "ติดตั้งไฟ เครื่องเสียง และอุปกรณ์เทคนิค", scores: { engineering: 2, it: 3 } },
        { text: "ตกแต่งสถานที่ให้สวยงาม", scores: { architecture: 3, arts: 2 } },
        { text: "บริหารจัดการงบประมาณและตารางเวลา", scores: { business: 3, economics: 2 } },
        { text: "ดูแลแขกให้ทุกคนสนุกสนาน", scores: { education: 2, medicine: 1, arts: 1, law: 1 } }
    ]},
    { text: "คุณเชื่อว่าสิ่งใดสำคัญที่สุดในการทำงาน?", choices: [
        { text: "ความถูกต้องแม่นยำ", scores: { science: 3, medicine: 2, engineering: 1 } },
        { text: "ความคิดสร้างสรรค์", scores: { architecture: 3, arts: 2, it: 1 } },
        { text: "การสื่อสารที่ดี", scores: { education: 2, law: 2, business: 2, arts: 1 } },
        { text: "ผลกำไรและความคุ้มค่า", scores: { economics: 3, business: 2 } }
    ]},
    { text: "ถ้าคุณย้อนเวลากลับไปได้ คุณจะทำอะไร?", choices: [
        { text: "ไปดูนักวิทยาศาสตร์ค้นพบสิ่งสำคัญ", scores: { science: 3, engineering: 1, medicine: 1 } },
        { text: "ไปสังเกตการสร้างสิ่งมหัศจรรย์ของโลก", scores: { architecture: 3, engineering: 2 } },
        { text: "ไปร่วมเหตุการณ์สำคัญทางประวัติศาสตร์", scores: { law: 2, arts: 2, education: 2 } },
        { text: "ไปซื้อหุ้นหรือลงทุนในสิ่งที่ตอนนี้มีมูลค่าสูง", scores: { economics: 3, business: 3 } }
    ]},
    { text: "สัตว์เลี้ยงที่คุณอยากมีมากที่สุดคือ?", choices: [
        { text: "สุนัข เพราะซื่อสัตย์และฝึกได้", scores: { education: 2, medicine: 2, law: 1 } },
        { text: "แมว เพราะเป็นอิสระและมีเสน่ห์", scores: { arts: 2, architecture: 2, it: 1 } },
        { text: "ปลาสวยงาม เพราะชอบจัดตู้ปลาให้สวย", scores: { architecture: 2, science: 2, arts: 1 } },
        { text: "ไม่อยากเลี้ยง เอาเวลาไปทำกิจกรรมอื่นดีกว่า", scores: { business: 2, economics: 2, engineering: 1 } }
    ]},
    { text: "ถ้าให้เลือกเรียนคอร์สออนไลน์ฟรี 1 คอร์ส คุณเลือก?", choices: [
        { text: "เขียนโปรแกรมหรือ Data Science", scores: { it: 3, engineering: 2, science: 1 } },
        { text: "การบริหารจัดการและการเป็นผู้นำ", scores: { business: 3, economics: 1, education: 1 } },
        { text: "การถ่ายภาพและการออกแบบกราฟิก", scores: { architecture: 2, arts: 3 } },
        { text: "ปฐมพยาบาลเบื้องต้นและสุขภาพ", scores: { medicine: 3, education: 1, science: 1 } }
    ]},
    { text: "คุณเห็นด้วยกับข้อความไหนมากที่สุด?", choices: [
        { text: "ข้อมูลและตรรกะสำคัญกว่าอารมณ์", scores: { engineering: 2, science: 2, economics: 2, it: 1 } },
        { text: "ความเห็นอกเห็นใจสำคัญที่สุด", scores: { medicine: 3, education: 2 } },
        { text: "ความสวยงามทำให้โลกน่าอยู่ขึ้น", scores: { architecture: 3, arts: 2 } },
        { text: "กฎระเบียบทำให้สังคมสงบสุข", scores: { law: 3, business: 1, education: 1 } }
    ]},
    { text: "ถ้าต้องเขียนรายงาน 1 เรื่อง คุณเลือกหัวข้อไหน?", choices: [
        { text: "พลังงานทดแทนและอนาคตของโลก", scores: { engineering: 3, science: 2 } },
        { text: "ผลกระทบของโซเชียลมีเดียต่อสังคม", scores: { arts: 2, law: 2, education: 2 } },
        { text: "กลยุทธ์ทางธุรกิจของบริษัทชั้นนำ", scores: { business: 3, economics: 2 } },
        { text: "ประวัติศาสตร์สถาปัตยกรรมโลก", scores: { architecture: 3, arts: 1, education: 1 } }
    ]},
    { text: "คุณชอบเล่นเกมประเภทไหนมากที่สุด?", choices: [
        { text: "เกมปริศนา ไขรหัส หรือเกมกลยุทธ์", scores: { it: 2, engineering: 2, science: 2, law: 1 } },
        { text: "เกมบริหารจัดการ สร้างเมือง หรือค้าขาย", scores: { business: 3, economics: 2, architecture: 1 } },
        { text: "เกมสร้างสรรค์ ตกแต่ง หรือ sandbox", scores: { architecture: 3, arts: 2 } },
        { text: "เกมเล่นเป็นทีม ช่วยกัน หรือ co-op", scores: { education: 2, medicine: 2, arts: 1 } }
    ]},
    { text: "ถ้ามีเวลา 1 ชั่วโมง คุณจะใช้ทำอะไร?", choices: [
        { text: "เรียนรู้ทักษะใหม่จาก tutorial ออนไลน์", scores: { it: 2, engineering: 2, science: 1, education: 1 } },
        { text: "ออกกำลังกาย ดูแลสุขภาพ", scores: { medicine: 2, science: 1, education: 1 } },
        { text: "วาดรูป ฟังเพลง หรือทำงานศิลปะ", scores: { architecture: 2, arts: 3 } },
        { text: "วางแผนเป้าหมายชีวิตและการเงิน", scores: { business: 2, economics: 3, law: 1 } }
    ]},
    { text: "คนรอบข้างมักชมคุณเรื่องอะไร?", choices: [
        { text: "เรียนเก่ง จำเร็ว แก้ปัญหาเก่ง", scores: { engineering: 2, science: 2, it: 2, economics: 1 } },
        { text: "ใจดี เข้าอกเข้าใจคนอื่น", scores: { medicine: 3, education: 2 } },
        { text: "พูดเก่ง เจรจาเก่ง โน้มน้าวเก่ง", scores: { law: 3, business: 2, arts: 1 } },
        { text: "มีไอเดียเก่ง ฝีมือสร้างสรรค์", scores: { architecture: 3, arts: 2, it: 1 } }
    ]},
    { text: "คุณจัดการกับความเครียดอย่างไร?", choices: [
        { text: "วิเคราะห์ปัญหาและแก้ทีละจุด", scores: { engineering: 2, science: 2, it: 2 } },
        { text: "พูดคุยระบายกับคนที่ไว้ใจ", scores: { education: 2, medicine: 2, arts: 1, law: 1 } },
        { text: "ทำงานศิลปะหรือกิจกรรมสร้างสรรค์", scores: { architecture: 3, arts: 3 } },
        { text: "วางแผนใหม่และมองหาโอกาส", scores: { business: 3, economics: 2 } }
    ]},
    { text: "ถ้าคุณเป็นครู คุณอยากสอนวิชาอะไร?", choices: [
        { text: "วิทยาศาสตร์หรือคณิตศาสตร์", scores: { science: 2, engineering: 2, education: 2 } },
        { text: "ภาษาหรือสังคมศึกษา", scores: { arts: 2, law: 1, education: 3 } },
        { text: "ศิลปะหรือการงานอาชีพ", scores: { architecture: 2, arts: 2, education: 2 } },
        { text: "ไม่อยากเป็นครู อยากทำธุรกิจมากกว่า", scores: { business: 3, economics: 2, it: 1 } }
    ]},
    { text: "เวลาดูหนัง ตัวละครแบบไหนที่คุณชอบมากที่สุด?", choices: [
        { text: "นักวิทยาศาสตร์อัจฉริยะ เช่น Tony Stark", scores: { engineering: 3, it: 2, science: 1 } },
        { text: "หมอผู้มีจิตวิญญาณ เช่น Doctor Strange", scores: { medicine: 3, science: 1 } },
        { text: "ทนายความผู้เปี่ยมด้วยความยุติธรรม", scores: { law: 3, education: 1 } },
        { text: "สถาปนิกหรือศิลปินผู้สร้างสรรค์โลก", scores: { architecture: 3, arts: 2 } }
    ]},
    { text: "ถ้ามีโอกาสฝึกงาน คุณเลือกที่ไหน?", choices: [
        { text: "บริษัทเทคโนโลยีชั้นนำ เช่น Google, Tesla", scores: { it: 3, engineering: 2 } },
        { text: "โรงพยาบาลหรือสถานพยาบาล", scores: { medicine: 3, science: 1, education: 1 } },
        { text: "สำนักงานกฎหมายหรือศาล", scores: { law: 3, economics: 1 } },
        { text: "บริษัทออกแบบหรือสตูดิโอสถาปัตยกรรม", scores: { architecture: 3, arts: 2 } }
    ]},
    { text: "คุณสนใจเรียนรู้เรื่องอะไรเพิ่มเติม?", choices: [
        { text: "ปัญญาประดิษฐ์ (AI) และ Machine Learning", scores: { it: 3, engineering: 2, science: 1 } },
        { text: "จิตวิทยาและพฤติกรรมมนุษย์", scores: { education: 2, medicine: 2, arts: 2 } },
        { text: "การตลาดดิจิทัลและ e-Commerce", scores: { business: 3, economics: 2, it: 1 } },
        { text: "ประวัติศาสตร์ศิลปะและอารยธรรมโลก", scores: { arts: 3, architecture: 2, education: 1 } }
    ]},
    { text: "ถ้าโรงเรียนจัดงานวิชาการ คุณจะรับบทเป็น...", choices: [
        { text: "ผู้จัดบูธทดลองวิทยาศาสตร์", scores: { science: 3, engineering: 2, medicine: 1 } },
        { text: "พิธีกรหรือผู้ดำเนินรายการ", scores: { arts: 2, law: 2, education: 2 } },
        { text: "ผู้ออกแบบป้ายและตกแต่งเวที", scores: { architecture: 3, arts: 2 } },
        { text: "ฝ่ายงบประมาณและจัดหาสปอนเซอร์", scores: { business: 3, economics: 2, law: 1 } }
    ]},
    { text: "ของเล่นที่คุณชอบตอนเด็กคืออะไร?", choices: [
        { text: "ตัวต่อ LEGO หรือชุดประกอบหุ่นยนต์", scores: { engineering: 3, it: 1, architecture: 1 } },
        { text: "ชุดหมอ หรือของเล่นดูแลตุ๊กตา", scores: { medicine: 3, education: 2 } },
        { text: "ดินสอสี สมุดวาดรูป ดินน้ำมัน", scores: { arts: 3, architecture: 2 } },
        { text: "เกมกระดาน เกมวางกลยุทธ์", scores: { business: 2, economics: 2, law: 2 } }
    ]},
    { text: "คุณมีความสุขที่สุดเมื่อไหร่?", choices: [
        { text: "เมื่อแก้ปัญหาที่ซับซ้อนได้สำเร็จ", scores: { engineering: 3, it: 2, science: 1 } },
        { text: "เมื่อได้ช่วยให้คนอื่นมีความสุข", scores: { medicine: 2, education: 3 } },
        { text: "เมื่อสร้างผลงานที่ภูมิใจออกมาได้", scores: { architecture: 3, arts: 2 } },
        { text: "เมื่อบรรลุเป้าหมายทางการเงินหรืออาชีพ", scores: { business: 3, economics: 2, law: 1 } }
    ]},
    { text: "คุณชอบทำงานแบบไหนมากกว่า?", choices: [
        { text: "ทำงานคนเดียว มีสมาธิเต็มที่", scores: { it: 2, science: 2, architecture: 2, engineering: 1 } },
        { text: "ทำงานเป็นทีมเล็กๆ ที่ไว้ใจกัน", scores: { medicine: 2, education: 2, arts: 1 } },
        { text: "เป็นหัวหน้าทีมที่นำคนอื่น", scores: { business: 3, law: 2, economics: 1 } },
        { text: "ทำงานร่วมกับคนหลากหลายแผนก", scores: { education: 2, business: 1, arts: 2, law: 1 } }
    ]},
    { text: "ถ้าให้เลือกทักษะ 1 อย่างที่ได้ทันที คุณเลือก?", choices: [
        { text: "เขียนโค้ดและพัฒนาแอปพลิเคชัน", scores: { it: 3, engineering: 2 } },
        { text: "พูดได้ 5 ภาษาอย่างคล่องแคล่ว", scores: { arts: 3, education: 2, law: 1 } },
        { text: "ผ่าตัดหรือทำหัตถการทางการแพทย์", scores: { medicine: 3, science: 1 } },
        { text: "เจรจาต่อรองระดับมืออาชีพ", scores: { business: 3, law: 2, economics: 1 } }
    ]},
    { text: "ถ้าโลกกำลังจะหายนะ คุณจะทำอะไร?", choices: [
        { text: "สร้างเครื่องจักรหรือเทคโนโลยีเพื่อรอดพ้นภัย", scores: { engineering: 3, it: 2, science: 1 } },
        { text: "รักษาคนเจ็บและดูแลผู้รอดชีวิต", scores: { medicine: 3, education: 1 } },
        { text: "จัดระเบียบสังคมใหม่ สร้างกฎหมายเพื่อความสงบ", scores: { law: 3, business: 1, economics: 1 } },
        { text: "รักษาศิลปะ วัฒนธรรม และความรู้ไว้ให้คนรุ่นหลัง", scores: { arts: 3, education: 2, architecture: 1 } }
    ]},
    { text: "คุณมักจะฝันถึงอะไร?", choices: [
        { text: "การค้นพบสิ่งใหม่ที่ไม่เคยมีใครรู้มาก่อน", scores: { science: 3, engineering: 1, medicine: 1 } },
        { text: "การมีบ้านหรืออาคารที่ออกแบบเอง", scores: { architecture: 3, arts: 1, engineering: 1 } },
        { text: "การเป็นเจ้าของธุรกิจที่ประสบความสำเร็จ", scores: { business: 3, economics: 2 } },
        { text: "การเปลี่ยนแปลงระบบการศึกษาให้ดีขึ้น", scores: { education: 3, law: 1, arts: 1 } }
    ]},
    { text: "วิธีจดบันทึกของคุณคือ?", choices: [
        { text: "เขียนสูตร แผนภาพ และตาราง", scores: { engineering: 2, science: 2, economics: 2, it: 1 } },
        { text: "เขียนเรียงความ สรุปเป็นข้อความ", scores: { arts: 2, law: 2, education: 2 } },
        { text: "วาด mind map สีสันสวยงาม", scores: { architecture: 3, arts: 2 } },
        { text: "พิมพ์ลงแอปหรือทำ digital note", scores: { it: 3, business: 1, economics: 1 } }
    ]},
    { text: "ถ้าให้เลือก 1 สิ่งที่จะเปลี่ยนโลก คุณเลือก?", choices: [
        { text: "พลังงานสะอาดที่ไม่มีวันหมด", scores: { engineering: 3, science: 2 } },
        { text: "ยารักษาโรคร้ายแรงทุกชนิด", scores: { medicine: 3, science: 2 } },
        { text: "ระบบการศึกษาที่ทุกคนเข้าถึงได้", scores: { education: 3, law: 1, economics: 1 } },
        { text: "ระบบเศรษฐกิจที่ยุติธรรมสำหรับทุกคน", scores: { economics: 3, law: 2, business: 1 } }
    ]}
];

// Question Bank for Exams
const EXAMS_DATABASE = [
    // --- TCAS Math ---
    {
        id: "tcas_math",
        title: "TCAS คณิตศาสตร์ทั่วไป",
        desc: "เน้นโจทย์สมการ ความน่าจะเป็น และเซตเพื่อทบทวนทักษะคำนวณ",
        rewardType: "raw_ore",
        category: "central",
        questions: [
            { q: "ถ้า A = {1, 2, 3} และ B = {3, 4, 5} แล้ว A ∩ B มีสมาชิกกี่ตัว?", c: ["0 ตัว", "1 ตัว", "2 ตัว", "3 ตัว"], a: 1 },
            { q: "โยนเหรียญเที่ยงตรง 2 อันพร้อมกัน โอกาสที่จะออกหัวอย่างน้อย 1 อันเป็นเท่าใด?", c: ["1/4", "1/2", "3/4", "1"], a: 2 },
            { q: "ค่าของ x จากสมการ 3x - 7 = 8 คือเท่าใด?", c: ["3", "5", "7", "9"], a: 1 },
            { q: "เลขคณิตอนุกรม 2, 4, 6, 8, ... พจน์ที่ 10 คือเลขใด?", c: ["18", "20", "22", "24"], a: 1 },
            { q: "สมการ x² - 5x + 6 = 0 มีคำตอบของสมการรวมกันได้เท่าใด?", c: ["5", "6", "-5", "-6"], a: 0 }
        ]
    },
    // --- TCAS Science ---
    {
        id: "tcas_sci",
        title: "TCAS วิทยาศาสตร์กายภาพ",
        desc: "รวมโจทย์ฟิสิกส์และเคมีพื้นฐานในการวิเคราะห์ปรากฏการณ์ธรรมชาติ",
        rewardType: "raw_leaves",
        category: "central",
        questions: [
            { q: "สารใดต่อไปนี้จัดเป็นสารบริสุทธิ์?", c: ["น้ำกลั่น", "น้ำเกลือ", "น้ำหวาน", "อากาศ"], a: 0 },
            { q: "ข้อใดคือหน่วยวัดของแรงในระบบ SI?", c: ["จูล", "วัตต์", "นิวตัน", "พาสคัล"], a: 2 },
            { q: "แก๊สใดที่มีปริมาณมากที่สุดในชั้นบรรยากาศโลก?", c: ["ออกซิเจน", "คาร์บอนไดออกไซด์", "ไนโตรเจน", "ไฮโดรเจน"], a: 2 },
            { q: "เมื่อวัตถุตกแบบเสรีภายใต้แรงโน้มถ่วงของโลก ความเร่งจะมีค่าประมาณกี่ m/s²?", c: ["0", "9.8", "98", "1.6"], a: 1 },
            { q: "ค่า pH ของสารละลายที่มีฤทธิ์เป็นเบสคือข้อใด?", c: ["pH < 7", "pH = 7", "pH > 7", "pH = 0"], a: 2 }
        ]
    },
    // --- TPAT Aptitude ---
    {
        id: "tpat_general",
        title: "TPAT ความถนัดทั่วไป",
        desc: "ทดสอบการคิดเชิงตรรกะ เชิงมิติสัมพันธ์ และการอ่านเพื่อจับใจความสำคัญ",
        rewardType: "raw_berry",
        category: "central",
        questions: [
            { q: "หมอ : โรงพยาบาล ควรคู่กับข้อใด?", c: ["ครู : โรงเรียน", "นักบิน : ท้องฟ้า", "ชาวนา : ข้าว", "นักเรียน : สมุด"], a: 0 },
            { q: "ถ้าหมุนกระดาษวงกลมตามเข็มนาฬิกา 90 องศา 2 ครั้ง จะเท่ากับการหมุนแบบใด?", c: ["หมุนทวนเข็ม 90 องศา", "หมุนกลับหัว 180 องศา", "กลับมาที่เดิม", "หมุนทวนเข็ม 45 องศา"], a: 1 },
            { q: "คำใดมีความหมายตรงข้ามกับคำว่า 'ซื่อสัตย์'?", c: ["เกียจคร้าน", "คดโกง", "ตระหนี่", "ประมาท"], a: 1 },
            { q: "อนุกรมภาพ: 🔼 -> 🔽 -> 🔼 -> ?", c: ["🔼", "🔽", "◀️", "▶️"], a: 1 },
            { q: "ข้อใดคือการตั้งสมมติฐานทางวิทยาศาสตร์ที่ดีที่สุด?", c: ["การเดาผลมั่วๆ", "การคาดคะเนผลลัพธ์โดยมีข้อมูลรองรับ", "การสรุปผลการทดลองล่วงหน้า", "การสังเกตโดยไม่มีเครื่องมือ"], a: 1 }
        ]
    },
    // --- Quota North ---
    {
        id: "quota_north",
        title: "โควตาภาคเหนือ (มช.)",
        desc: "แนวข้อสอบความรู้ทั่วไปและสังคมล้านนา และภูมิศาสตร์ภาคเหนือ",
        rewardType: "raw_meat",
        category: "regional",
        questions: [
            { q: "ดอยที่สูงที่สุดในประเทศไทยตั้งอยู่ในจังหวัดใด?", c: ["เชียงราย", "เชียงใหม่", "แม่ฮ่องสอน", "น่าน"], a: 1 },
            { q: "ประเพณีใดที่เป็นเอกลักษณ์การลอยกระทงของภาคเหนือ?", c: ["ยี่เป็ง", "ไหลเรือไฟ", "ตักบาตรเทโว", "แห่ผีตาโขน"], a: 0 },
            { q: "แม่น้ำสายใดต่อไปนี้ไม่ได้ไหลผ่านภาคเหนือ?", c: ["ปิง", "วัง", "ยม", "มูล"], a: 3 },
            { q: "วัดพระธาตุดอยสุเทพเป็นปูชนียสถานคู่บ้านคู่เมืองของจังหวัดใด?", c: ["เชียงใหม่", "ลำพูน", "แพร่", "ลำปาง"], a: 0 },
            { q: "พืชเศรษฐกิจที่สำคัญในเขตภูเขาของภาคเหนือคือข้อใด?", c: ["ยางพารา", "สตอเบอรี่และชา", "ปาล์มน้ำมัน", "มะพร้าว"], a: 1 }
        ]
    },
    // --- Quota South ---
    {
        id: "quota_south",
        title: "โควตาภาคใต้ (ม.อ.)",
        desc: "ข้อสอบความรู้สังคม วัฒนธรรมภาคใต้ และอุตสาหกรรมยางพารา/ประมง",
        rewardType: "raw_berry",
        category: "regional",
        questions: [
            { q: "เกาะที่ใหญ่ที่สุดในประเทศไทยคือเกาะใด?", c: ["เกาะสมุย", "เกาะช้าง", "เกาะภูเก็ต", "เกาะลันตา"], a: 2 },
            { q: "การละเล่นพื้นบ้านที่เป็นเอกลักษณ์ของภาคใต้คือข้อใด?", c: ["หมอลำ", "หนังตะลุง", "ฟ้อนเล็บ", "รองแง็ง"], a: 1 },
            { q: "คาบสมุทรภาคใต้ขนาบด้วยทะเลฝั่งใดบ้าง?", c: ["อ่าวไทยและอันดามัน", "อันดามันและแปซิฟิก", "อ่าวไทยและทะเลจีนใต้", "อันดามันและทะเลจีนใต้"], a: 0 },
            { q: "เมืองร้อยเกาะ เงาะอร่อย หอยใหญ่ ไข่แดง เป็นคำขวัญจังหวัดใด?", c: ["ชุมพร", "สงขลา", "สุราษฎร์ธานี", "นครศรีธรรมราช"], a: 2 },
            { q: "พืชเศรษฐกิจหลักของภาคใต้คือข้อใด?", c: ["ข้าวและข้าวโพด", "ยางพาราและปาล์มน้ำมัน", "มันสำปะหลัง", "อ้อย"], a: 1 }
        ]
    },
    // --- Quota Central ---
    {
        id: "quota_central",
        title: "โควตาภาคกลาง (มศว/มธ)",
        desc: "เน้นโจทย์วิชาภาษาไทย วรรณคดี และความรู้รอบตัวเกี่ยวกับประวัติศาสตร์ภาคกลาง",
        rewardType: "raw_leaves",
        category: "regional",
        questions: [
            { q: "แม่น้ำเจ้าพระยาเกิดจากการรวมกันของแม่น้ำสายหลักกี่สาย?", c: ["2 สาย", "3 สาย", "4 สาย", "5 สาย"], a: 2 },
            { q: "จังหวัดใดในภาคกลางเคยเป็นราชธานีเก่าของไทยนานที่สุด?", c: ["สุโขทัย", "ลพบุรี", "พระนครศรีอยุธยา", "ธนบุรี"], a: 2 },
            { q: "ผลไม้ขึ้นชื่อของจังหวัดนครปฐมคือข้อใด?", c: ["ส้มโอ", "ทุเรียน", "มะม่วง", "เงาะ"], a: 0 },
            { q: "วรรณคดีเรื่องขุนช้างขุนแผน มีฉากดำเนินเรื่องส่วนใหญ่ในจังหวัดใด?", c: ["กาญจนบุรี", "สุพรรณบุรี", "อ่างทอง", "นนทบุรี"], a: 1 },
            { q: "ที่ราบลุ่มภาคกลางเหมาะแก่การทำอาชีพใดมากที่สุด?", c: ["การทำเหมืองแร่", "การปลูกข้าว (เกษตรกรรม)", "การเลี้ยงสัตว์ทุ่งหญ้า", "การป่าไม้"], a: 1 }
        ]
    },
    // --- Quota Northeast ---
    {
        id: "quota_northeast",
        title: "โควตาภาคตะวันออกเฉียงเหนือ (มข.)",
        desc: "ความรู้ทั่วไปเกี่ยวกับภูมิศาสตร์ วัฒนธรรมฮีตสิบสองครองสิบสี่ของชาวอีสาน",
        rewardType: "raw_meat",
        category: "regional",
        questions: [
            { q: "แม่น้ำโขงกั้นพรมแดนระหว่างประเทศไทยกับประเทศใดมากที่สุด?", c: ["เมียนมา", "กัมพูชา", "ลาว", "เวียดนาม"], a: 2 },
            { q: "เทศกาลท่องเที่ยวดัง 'ผีตาโขน' จัดขึ้นที่จังหวัดใด?", c: ["เลย", "หนองคาย", "ขอนแก่น", "อุบลราชธานี"], a: 0 },
            { q: "ทิวเขาที่แบ่งภาคอีสานออกเป็นแอ่งโคราชและแอ่งสกลนครคือทิวเขาใด?", c: ["ทิวเขาภูพาน", "ทิวเขาพนมดงรัก", "ทิวเขาเพชรบูรณ์", "ทิวเขาดงพญาเย็น"], a: 0 },
            { q: "ประเพณีขอฝนอันเลื่องชื่อของภาคอีสานคือประเพณีใด?", c: ["แห่เทียนพรรษา", "บุญบั้งไฟ", "ไหลเรือไฟ", "โยนบัว"], a: 1 },
            { q: "ข้อใดคือดินที่พบมากที่สุดในภาคตะวันออกเฉียงเหนือซึ่งเก็บน้ำได้น้อย?", c: ["ดินเหนียว", "ดินทราย", "ดินร่วน", "ดินโคลน"], a: 1 }
        ]
    },
    // --- TCAS English ---
    {
        id: "tcas_eng",
        title: "TCAS ภาษาอังกฤษทั่วไป",
        desc: "วัดทักษะไวยากรณ์ คำศัพท์ และบทสนทนาที่ใช้บ่อยในชีวิตประจำวัน",
        rewardType: "raw_crystal",
        category: "central",
        questions: [
            { q: "Choose the correct word: She ___ to school yesterday.", c: ["go", "goes", "went", "going"], a: 2 },
            { q: "What is the synonym of 'Huge'?", c: ["Tiny", "Gigantic", "Small", "Weak"], a: 1 },
            { q: "Which sentence is grammatically correct?", c: ["He don't like apples.", "She like read books.", "They has a big house.", "We are planning a trip."], a: 3 },
            { q: "What is the opposite of 'Arrive'?", c: ["Depart", "Enter", "Stay", "Reach"], a: 0 },
            { q: "If you ___ hard, you will pass the exam.", c: ["studying", "study", "studied", "studies"], a: 1 }
        ]
    },
    // --- Quota East ---
    {
        id: "quota_east",
        title: "โควตาภาคตะวันออก (ม.บูรพา)",
        desc: "ทบทวนสังคม วัฒนธรรมภาคตะวันออก ท่องเที่ยวชายฝั่ง และการส่งออก",
        rewardType: "raw_fish",
        category: "regional",
        questions: [
            { q: "หาดท่องเที่ยวที่มีชื่อเสียงที่สุดในจังหวัดชลบุรีคือข้อใด?", c: ["หาดป่าตอง", "หาดบางแสน", "หาดชะอำ", "หาดกะรน"], a: 1 },
            { q: "พืชเศรษฐกิจสำคัญชนิดใดในภาคตะวันออกที่ได้ชื่อว่าเป็น 'ราชาผลไม้'?", c: ["ทุเรียน", "มังคุด", "เงาะ", "ลำไย"], a: 0 },
            { q: "ท่าเรือน้ำลึกที่สำคัญที่สุดในภาคตะวันออกคือท่าเรือใด?", c: ["ท่าเรือคลองเตย", "ท่าเรือแหลมฉบัง", "ท่าเรือสงขลา", "ท่าเรือระนอง"], a: 1 },
            { q: "จังหวัดใดต่อไปนี้ไม่ได้ตั้งอยู่ในภาคตะวันออก?", c: ["ชลบุรี", "จันทบุรี", "ตราด", "ราชบุรี"], a: 3 },
            { q: "เกาะใดที่มีชื่อเสียงของจังหวัดตราดและใหญ่เป็นอันดับสองรองจากภูเก็ตในฝั่งอ่าวไทย?", c: ["เกาะเสม็ด", "เกาะล้าน", "เกาะช้าง", "เกาะพะงัน"], a: 2 }
        ]
    }
];

// Mock Users for Study Buddy Matcher
const MOCK_BUDDIES = [
    { name: "น้องบิว", idealFaculty: "engineering", strength: "math", studyStyle: "exam", interests: "ชอบเขียนโปรแกรม, เล่นบอร์ดเกม", discord: "Beau#4452", isBot: true },
    { name: "พิชชา", idealFaculty: "medicine", strength: "science", studyStyle: "silent", interests: "อ่านชีวะ, วาดรูปอะนาโตมี", discord: "Pitcha_Med#8812", isBot: true },
    { name: "นนท์", idealFaculty: "it", strength: "math", studyStyle: "group", interests: "ทำเว็บคอร์สออนไลน์, คอนฟิกเซิร์ฟเวอร์", discord: "NontCode#0091", isBot: true },
    { name: "แก้วใจ", idealFaculty: "education", strength: "society", studyStyle: "group", interests: "ชอบสรุปบทเรียนแชร์ลงไอจี, สอนเพื่อน", discord: "KaeoJai_T#1123", isBot: true },
    { name: "ฟลุ๊ค", idealFaculty: "business", strength: "languages", studyStyle: "exam", interests: "เทรดหุ้นจำลอง, ฝึกภาษาอังกฤษ", discord: "FlukeBiz#9901", isBot: true },
    { name: "มีน", idealFaculty: "law", strength: "society", studyStyle: "silent", interests: "ดูคดีความ, อ่านนิยายสืบสวน", discord: "MeanLaw#5541", isBot: true },
    { name: "แพรวา", idealFaculty: "arts", strength: "languages", studyStyle: "group", interests: "ติวโทอิค, ดูหนังซับไตเติ้ลอังกฤษ", discord: "Praewa_Lang#7732", isBot: true },
    { name: "จินตนา", idealFaculty: "architecture", strength: "art_design", studyStyle: "silent", interests: "สเกตช์ภาพตึก, ออกแบบไอคอน", discord: "JinnaArch#2244", isBot: true }
];

// Dinosaur Evolutions Path definitions
const DINO_EVOLUTION_STAGES = {
    egg: { emoji: "🥚", label: "ไข่ไดโนเสาร์", desc: "ไข่กำลังอุ่นได้ที่ ต้องการอาหารอุดมสมบูรณ์ในการฟักตัว" },
    baby: { emoji: "🦖", label: "ไดโนตัวน้อย (เบบี้)", desc: "ฟักออกมาแล้ว! ขี้เล่นและหิวบ่อยมาก ป้อนอาหารบ่อยๆ เพื่อสะสม EXP" },
    teen: { emoji: "🦕", label: "ไดโนเสาร์วัยรุ่น", desc: "ตัวโตขึ้น เริ่มมีความคิดและอุปนิสัยเฉพาะตัว ป้อนสูตรอาหารเพื่อวิวัฒนาการร่างโตเต็มวัย" },
    adult_herbivore: { emoji: "🐉", label: "มังกรเขียวสายรักสงบ (Herbivore)", desc: "วิวัฒนาการจากผักผลไม้ มีจิตใจดี อ่อนโยน และตัวใหญ่มาก!" },
    adult_carnivore: { emoji: "🦖🔥", label: "ทีเร็กซ์ไฟดุดัน (Carnivore)", desc: "วิวัฒนาการจากสเต็กเนื้อสัตว์ มีพละกำลังมหาศาล ว่องไวและแข็งแกร่ง" },
    adult_cyborg: { emoji: "🤖🦕", label: "ไดโนจักรกลไซบอร์ก (Cyborg)", desc: "วิวัฒนาการจากวัตถุดิบไฮเทคและแร่เหล็ก มีพลังป้องกันสูงสุดและประมวลผลฉับไว" }
};

// Raw materials metadata
const RAW_ITEMS = {
    raw_leaves: { name: "ใบไม้สด", emoji: "🥬", desc: "ผักสดมีไฟเบอร์สูง เหมาะกับไดโนเสาร์รักสงบ" },
    raw_meat: { name: "เนื้อดิบชั้นดี", emoji: "🥩", desc: "โปรตีนเน้นๆ ช่วยสร้างมวลกล้ามเนื้อและพลังงาน" },
    raw_berry: { name: "เบอร์รี่วิเศษ", emoji: "🫐", desc: "ผลไม้สีม่วงเปล่งประกาย ช่วยกระตุ้นวิวัฒนาการ" },
    raw_ore: { name: "แร่ชาร์จไฟ", emoji: "⛰️", desc: "แร่เหล็กที่มีไฟฟ้าสถิต เหมาะสำหรับแปลงสายไฮเทค" },
    raw_mushroom: { name: "เห็ดวิเศษ", emoji: "🍄", desc: "เห็ดหายากจากถ้ำลึก เพิ่มพลังลึกลับ" },
    raw_fish: { name: "ปลาสด", emoji: "🐟", desc: "ปลาน้ำจืดโปรตีนสูง จากแม่น้ำโบราณ" },
    raw_crystal: { name: "คริสตัลเรืองแสง", emoji: "💎", desc: "ผลึกพลังงานจากยุคดึกดำบรรพ์" }
};

// Crafted items metadata
const CRAFTED_ITEMS = {
    salad_premium: { name: "สลัดผักพรีเมียม", emoji: "🥗", desc: "ผสมจาก ใบไม้ + ใบไม้ ให้พลังสายพืชสูง", formula: ["raw_leaves", "raw_leaves"] },
    steak_perfect: { name: "สเต็กสุกพอดี", emoji: "🍖", desc: "ผสมจาก เนื้อดิบ + เนื้อดิบ ให้พลังสายเนื้อสูง", formula: ["raw_meat", "raw_meat"] },
    soup_mix: { name: "ซุปผักรวมมิตร", emoji: "🍲", desc: "ผสมจาก ใบไม้ + เนื้อดิบ สายบาลานซ์กลมกล่อม", formula: ["raw_leaves", "raw_meat"] },
    magma_fruit: { name: "ผลไม้เพลิงแมกม่า", emoji: "☄️", desc: "ผสมจาก เบอร์รี่วิเศษ + แร่ชาร์จไฟ ปลดปล่อยพลังแฝง", formula: ["raw_berry", "raw_ore"] },
    mushroom_soup: { name: "ซุปเห็ดป่า", emoji: "🍵", desc: "ผสมจาก เห็ด + ใบไม้ พลังสายพืชเข้มข้น", formula: ["raw_mushroom", "raw_leaves"] },
    sashimi_deluxe: { name: "ซาชิมิดีลักซ์", emoji: "🍣", desc: "ผสมจาก ปลา + ปลา โปรตีนระดับพรีเมียม", formula: ["raw_fish", "raw_fish"] },
    grilled_fish: { name: "ย่างรวมทะเลบก", emoji: "🍢", desc: "ผสมจาก ปลา + เนื้อ รวมโปรตีนสุดปัง", formula: ["raw_fish", "raw_meat"] },
    crystal_potion: { name: "ยาพลังคริสตัล", emoji: "🧪", desc: "ผสมจาก คริสตัล + คริสตัล พลังไซบอร์กสุดล้ำ", formula: ["raw_crystal", "raw_crystal"] },
    berry_crystal: { name: "เจลลี่เพชรเรืองแสง", emoji: "🍮", desc: "ผสมจาก เบอร์รี่ + คริสตัล พลังวิวัฒนาการ", formula: ["raw_berry", "raw_crystal"] },
    mushroom_steak: { name: "สเต็กเห็ดทรัฟเฟิล", emoji: "🥘", desc: "ผสมจาก เห็ด + เนื้อ อาหารพรีเมียมสุดๆ", formula: ["raw_mushroom", "raw_meat"] }
};


// ========================================
// 2. AUTH SYSTEM (LOGIN / REGISTER)
// ========================================

const USERS_DB_KEY = "dino_learn_users_db";
const CURRENT_USER_KEY = "dino_learn_current_user";

let isRegisterMode = false;
let currentLoggedInUser = null;

// Load users database
function getUsersDB() {
    try {
        const raw = localStorage.getItem(USERS_DB_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch(e) {
        return {};
    }
}

// Save users database
function saveUsersDB(db) {
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(db));
}

// Toggle between login and register mode
function toggleLoginMode() {
    isRegisterMode = !isRegisterMode;

    const subtitle = document.getElementById("loginSubtitle");
    const btn = document.getElementById("btnLogin");
    const toggleText = document.getElementById("loginToggleText");
    const emailGroup = document.getElementById("registerEmailGroup");
    const confirmGroup = document.getElementById("registerConfirmGroup");
    const errEl = document.getElementById("loginError");

    errEl.textContent = "";

    if (isRegisterMode) {
        subtitle.textContent = "สร้างบัญชีใหม่เพื่อเริ่มต้นการเรียนรู้";
        btn.textContent = "สมัครสมาชิก";
        emailGroup.style.display = "flex";
        confirmGroup.style.display = "flex";
        toggleText.innerHTML = 'มีบัญชีอยู่แล้ว? <a onclick="toggleLoginMode()">เข้าสู่ระบบ</a>';
    } else {
        subtitle.textContent = "เข้าสู่ระบบเพื่อเริ่มต้นการเรียนรู้";
        btn.textContent = "เข้าสู่ระบบ";
        emailGroup.style.display = "none";
        confirmGroup.style.display = "none";
        toggleText.innerHTML = 'ยังไม่มีบัญชี? <a onclick="toggleLoginMode()">สมัครสมาชิกใหม่</a>';
    }
}

// Login function
function loginUser() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const errEl = document.getElementById("loginError");

    errEl.textContent = "";

    if (isRegisterMode) {
        // Register flow
        const confirmPassword = document.getElementById("registerConfirmPassword").value;

        if (!username || username.length < 3) {
            errEl.textContent = "⚠️ ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร";
            return;
        }
        if (!/^[a-zA-Z0-9ก-ฮ_]+$/.test(username)) {
            errEl.textContent = "⚠️ ชื่อผู้ใช้ใช้ได้เฉพาะตัวอักษร, ตัวเลข และ _";
            return;
        }
        if (!password || password.length < 6) {
            errEl.textContent = "⚠️ รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
            return;
        }
        if (password !== confirmPassword) {
            errEl.textContent = "⚠️ รหัสผ่านไม่ตรงกัน กรุณาลองใหม่";
            return;
        }

        const db = getUsersDB();
        if (db[username.toLowerCase()]) {
            errEl.textContent = "⚠️ ชื่อผู้ใช้นี้มีคนใช้งานแล้ว กรุณาเลือกชื่ออื่น";
            return;
        }

        // Create new account with fresh state
        const newUserState = {
            username: username,
            password: btoa(password), // basic obfuscation (not production-safe)
            email: document.getElementById("registerEmail").value.trim(),
            createdAt: Date.now(),
            gameState: null // will be created on first login
        };

        db[username.toLowerCase()] = newUserState;
        saveUsersDB(db);

        // Auto login after register
        performLogin(username, db[username.toLowerCase()]);
        showToast(`🎉 สมัครสมาชิกสำเร็จ! ยินดีต้อนรับ ${username} สู่ DinoLearn Hub!`, "success");

    } else {
        // Login flow
        if (!username) {
            errEl.textContent = "⚠️ กรุณากรอกชื่อผู้ใช้";
            return;
        }
        if (!password) {
            errEl.textContent = "⚠️ กรุณากรอกรหัสผ่าน";
            return;
        }

        const db = getUsersDB();
        const userRecord = db[username.toLowerCase()];

        if (!userRecord) {
            errEl.textContent = "❌ ไม่พบบัญชีผู้ใช้นี้ กรุณาสมัครสมาชิกก่อน";
            return;
        }

        if (userRecord.password !== btoa(password)) {
            errEl.textContent = "❌ รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่";
            return;
        }

        performLogin(username, userRecord);
        showToast(`🦖 ยินดีต้อนรับกลับมา ${username}! ไดโนเสาร์รอคุณอยู่นะ`, "success");
    }
}

// Perform the actual login (shared between login and register)
function performLogin(username, userRecord) {
    currentLoggedInUser = username;
    localStorage.setItem(CURRENT_USER_KEY, username);

    // Load user-specific state key
    const userStateKey = `dino_learn_state_${username.toLowerCase()}`;
    const savedState = localStorage.getItem(userStateKey);
    if (savedState) {
        try {
            state = JSON.parse(savedState);
            if (!state.inventory) state.inventory = { raw_leaves: 2, raw_meat: 2, raw_berry: 1, raw_ore: 1, raw_mushroom: 0, raw_fish: 0, raw_crystal: 0, salad_premium: 0, steak_perfect: 0, soup_mix: 0, magma_fruit: 0, mushroom_soup: 0, sashimi_deluxe: 0, grilled_fish: 0, crystal_potion: 0, berry_crystal: 0, mushroom_steak: 0 };
            if (!state.streak) state.streak = { count: 1, lastActiveDate: Date.now() };
            if (!state.examLimit) state.examLimit = { count: 0, lastResetDate: Date.now() };
            if (state.wallet === undefined) state.wallet = 100;
            if (state.studyTime === undefined) state.studyTime = 0;
            if (state.dinoCollection === undefined) state.dinoCollection = [];
        } catch(e) {
            console.error("Error loading user state", e);
        }
    }
    // else: use default state

    // Update username display
    document.getElementById("sidebarUsername").textContent = username;

    // Check streak now that we know the user
    checkLoginStreak();
    checkExamDailyLimitReset();
    updateDashboardUI();
    updateDinoUI();

    // Hide login overlay
    const overlay = document.getElementById("loginOverlay");
    overlay.classList.add("login-hidden");
    setTimeout(() => { overlay.style.display = "none"; }, 500);

    // Clear password field
    document.getElementById("loginPassword").value = "";
}

// Logout function
function logoutUser() {
    if (!currentLoggedInUser) return;

    // Save state before logout
    saveState();

    currentLoggedInUser = null;
    localStorage.removeItem(CURRENT_USER_KEY);

    // Show login overlay again
    const overlay = document.getElementById("loginOverlay");
    overlay.style.display = "flex";
    overlay.classList.remove("login-hidden");

    // Reset form
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
    document.getElementById("loginError").textContent = "";

    // Switch back to login mode if was in register
    if (isRegisterMode) toggleLoginMode();

    showToast("👋 ออกจากระบบเรียบร้อยแล้ว พบกันใหม่นะ!", "success");
}

// Check if user was already logged in (session persistence)
function checkExistingSession() {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (savedUser) {
        const db = getUsersDB();
        if (db[savedUser.toLowerCase()]) {
            performLogin(savedUser, db[savedUser.toLowerCase()]);
            return true;
        }
    }
    return false;
}

// ========================================
// 2. STATE MANAGEMENT (LOCAL STORAGE)
// ========================================

let state = {
    user: {
        level: 1,
        evaluatedFaculty: null, // "engineering", "medicine", etc.
        strengths: "math",
        studyStyle: "silent"
    },
    dino: {
        name: "น้องก็อตจิ",
        stage: "egg", // egg, baby, teen, adult_herbivore, adult_carnivore, adult_cyborg
        exp: 0,
        hunger: 100, // 0 - 100
        mood: 100,   // 0 - 100
        emotion: "ดีใจ", // ดีใจ, หิว, โกรธ, ตาย
        herbivoreCount: 0,
        carnivoreCount: 0,
        cyborgCount: 0,
        lastLoginDate: Date.now() // timestamp
    },
    inventory: {
        raw_leaves: 2,
        raw_meat: 2,
        raw_berry: 1,
        raw_ore: 1,
        raw_mushroom: 0,
        raw_fish: 0,
        raw_crystal: 0,
        salad_premium: 0,
        steak_perfect: 0,
        soup_mix: 0,
        magma_fruit: 0,
        mushroom_soup: 0,
        sashimi_deluxe: 0,
        grilled_fish: 0,
        crystal_potion: 0,
        berry_crystal: 0,
        mushroom_steak: 0
    },
    streak: {
        count: 1,
        lastActiveDate: Date.now()
    },
    examLimit: {
        count: 0,
        lastResetDate: Date.now()
    },
    wallet: 100,
    studyTime: 0,
    dinoCollection: []
};

// Load State from LocalStorage (legacy - now per-user via performLogin)
function loadState() {
    // State is now loaded per-user in performLogin()
    // This is kept for compatibility only
}

// Check and Reset Exam Daily Limit
function checkExamDailyLimitReset() {
    if (!state.examLimit) {
        state.examLimit = {
            count: 0,
            lastResetDate: Date.now()
        };
    }
    const lastDate = new Date(state.examLimit.lastResetDate).toDateString();
    const currentDate = new Date().toDateString();
    if (lastDate !== currentDate) {
        state.examLimit.count = 0;
        state.examLimit.lastResetDate = Date.now();
    }
}

// Save State to LocalStorage (per-user)
function saveState() {
    if (currentLoggedInUser) {
        const userStateKey = `dino_learn_state_${currentLoggedInUser.toLowerCase()}`;
        localStorage.setItem(userStateKey, JSON.stringify(state));
    } else {
        // Fallback for legacy
        localStorage.setItem("dino_learn_hub_state", JSON.stringify(state));
    }
    updateDashboardUI();
    updateDinoUI();
}

// Check Daily Streak and Dino Emotions
function checkLoginStreak() {
    const now = Date.now();
    const lastActive = state.streak.lastActiveDate || now;
    const diffMs = now - lastActive;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (state.dino.stage !== "dead") {
        if (diffDays >= 3) {
            // Died due to neglect
            state.dino.previousStageBeforeDeath = state.dino.stage;
            state.dino.stage = "dead";
            state.dino.emotion = "ตาย";
            state.dino.hunger = 0;
            state.dino.mood = 0;
            showToast("💔 ไดโนเสาร์ของคุณเสียชีวิตเนื่องจากไม่ได้เข้ามาดูแลเกิน 3 วัน!", "danger");
        } else if (diffDays >= 2) {
            // Angry
            state.dino.emotion = "โกรธ";
            state.dino.mood = Math.max(10, state.dino.mood - 50);
            state.dino.hunger = Math.max(10, state.dino.hunger - 50);
            showToast("😡 ไดโนเสาร์โกรธแล้ว! เพราะคุณทิ้งมันไป 2 วัน", "danger");
        } else if (diffDays >= 1) {
            // Next day login
            state.streak.count += 1;
            state.dino.emotion = "ดีใจ";
            state.dino.hunger = Math.max(20, state.dino.hunger - 30);
            state.dino.mood = Math.max(20, state.dino.mood - 20);
            showToast("🔥 ล็อกอินรายวันสำเร็จ! ไดโนเสาร์ของคุณดีใจที่ได้พบคุณ", "success");
        } else {
            // Same day, make sure hunger drops slowly
            state.dino.hunger = Math.max(10, state.dino.hunger - 2);
            if (state.dino.hunger < 30) {
                state.dino.emotion = "หิว";
            }
        }
    }

    state.streak.lastActiveDate = now;
    state.dino.lastLoginDate = now;
    localStorage.setItem("dino_learn_hub_state", JSON.stringify(state));
}

// Full Reset (if Dino dies)
function resetDinoSystem() {
    state.dino = {
        name: "น้องก็อตจิคนใหม่",
        stage: "egg",
        exp: 0,
        hunger: 100,
        mood: 100,
        emotion: "ดีใจ",
        herbivoreCount: 0,
        carnivoreCount: 0,
        cyborgCount: 0,
        lastLoginDate: Date.now()
    };
    state.streak.count = 1;
    state.streak.lastActiveDate = Date.now();
    saveState();
    showToast("🥚 เริ่มฟักไข่ไดโนเสาร์ฟองใหม่แล้ว! เลี้ยงดูให้ดีนะ", "success");
}


// ========================================
// 3. NAVIGATION SYSTEM (SPA)
// ========================================

function switchPage(pageId) {
    // Hide all pages
    document.querySelectorAll(".app-page").forEach(page => {
        page.classList.remove("active");
    });
    
    // Deactivate all nav buttons
    document.querySelectorAll(".nav-item").forEach(btn => {
        btn.classList.remove("active");
    });

    // Show selected page
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add("active");
    }

    // Activate corresponding button
    const activeBtn = document.querySelector(`.nav-item[data-page="${pageId}"]`);
    if (activeBtn) {
        activeBtn.classList.add("active");
    }

    // Custom updates for specific pages
    if (pageId === "buddyPage") {
        renderStudyBuddies();
    } else if (pageId === "dinoPage") {
        renderInventoryUI();
    } else if (pageId === "examPage") {
        renderExamHub();
    } else if (pageId === "chatPage") {
        renderFriendRequests();
        renderFriendsList();
        renderChatsList();
        renderGroupMembersSelect();
    } else if (pageId === "reportPage") {
        renderReportList();
    }
}

// Add Click Listeners to Nav
document.querySelectorAll(".nav-item").forEach(button => {
    button.addEventListener("click", () => {
        const pageId = button.getAttribute("data-page");
        switchPage(pageId);
    });
});


// ========================================
// 4. MODULE 1: FACULTY EVALUATION
// ========================================

let quizState = {
    questions: [],
    index: 0,
    scores: {}
};

const btnStartQuiz = document.getElementById("btnStartQuiz");
const btnRestartQuiz = document.getElementById("btnRestartQuiz");

function initFacultyQuiz() {
    document.getElementById("quizLandingView").classList.add("active");
    document.getElementById("quizActiveView").classList.remove("active");
    document.getElementById("quizResultView").classList.remove("active");
}

function startFacultyQuiz() {
    quizState.index = 0;
    quizState.scores = {};
    Object.keys(FACULTIES).forEach(key => quizState.scores[key] = 0);

    // Shuffle and pick 25 questions
    const shuffled = shuffleArray(ALL_QUESTIONS).slice(0, 25);
    quizState.questions = shuffled.map(q => ({
        ...q,
        choices: shuffleArray(q.choices)
    }));

    document.getElementById("quizLandingView").classList.remove("active");
    document.getElementById("quizActiveView").classList.add("active");
    document.getElementById("quizResultView").classList.remove("active");

    renderQuizQuestion();
}

function renderQuizQuestion() {
    if (quizState.index >= quizState.questions.length) {
        showQuizResults();
        return;
    }

    const q = quizState.questions[quizState.index];
    const container = document.getElementById("choicesContainer");
    
    // Update progress
    const progress = (quizState.index / quizState.questions.length) * 100;
    document.getElementById("progressText").textContent = `ข้อ ${quizState.index + 1} / ${quizState.questions.length}`;
    document.getElementById("progressPercent").textContent = `${Math.round(progress)}%`;
    document.getElementById("progressFill").style.width = `${progress}%`;
    document.getElementById("questionNumber").textContent = String(quizState.index + 1).padStart(2, '0');
    document.getElementById("questionText").textContent = q.text;

    container.innerHTML = "";
    const labels = ["ก", "ข", "ค", "ง"];

    q.choices.forEach((choice, idx) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerHTML = `
            <span class="choice-label">${labels[idx]}</span>
            <span class="choice-text">${choice.text}</span>
        `;
        btn.addEventListener("click", () => selectQuizChoice(choice));
        container.appendChild(btn);
    });

    const card = document.getElementById("questionCard");
    card.style.animation = "none";
    card.offsetHeight; // Force reflow
    card.style.animation = "card-enter 0.4s ease-out";
}

function selectQuizChoice(choice) {
    // Accumulate scores
    Object.entries(choice.scores).forEach(([faculty, pts]) => {
        quizState.scores[faculty] = (quizState.scores[faculty] || 0) + pts;
    });

    // Move to next question with brief transition delay
    const btns = document.querySelectorAll("#choicesContainer .choice-btn");
    btns.forEach(btn => btn.style.pointerEvents = "none");
    
    setTimeout(() => {
        quizState.index++;
        renderQuizQuestion();
    }, 200);
}

function showQuizResults() {
    const maxVal = Math.max(...Object.values(quizState.scores));
    const sorted = Object.entries(quizState.scores)
        .map(([key, val]) => ({ key, score: val, ...FACULTIES[key] }))
        .sort((a, b) => b.score - a.score);

    // Save evaluated faculty in User state
    const topFaculty = sorted[0];
    state.user.evaluatedFaculty = topFaculty.key;
    saveState();

    // Display top highlight
    document.getElementById("topFacultyIcon").textContent = topFaculty.icon;
    document.getElementById("topFacultyName").textContent = topFaculty.name;
    document.getElementById("topFacultyDesc").textContent = topFaculty.desc;
    document.getElementById("topFacultyScore").textContent = `${topFaculty.score} คะแนน`;

    // Render list
    const list = document.getElementById("rankingsContainer");
    list.innerHTML = "";

    sorted.slice(1).forEach((item, idx) => {
        const pos = idx + 2;
        let rankClass = "";
        if (pos === 2) rankClass = "silver";
        if (pos === 3) rankClass = "bronze";

        const barWidth = maxVal > 0 ? (item.score / maxVal) * 100 : 0;

        const row = document.createElement("div");
        row.className = "rank-item";
        row.innerHTML = `
            <span class="rank-position ${rankClass}">${pos}</span>
            <span class="rank-icon">${item.icon}</span>
            <div class="rank-info">
                <div class="rank-name">${item.name}</div>
                <div class="rank-bar-wrapper">
                    <div class="rank-bar"><div class="rank-bar-fill" style="width: 0%" data-w="${barWidth}"></div></div>
                    <span class="rank-score">${item.score} คะแนน</span>
                </div>
            </div>
        `;
        list.appendChild(row);
    });

    document.getElementById("quizActiveView").classList.remove("active");
    document.getElementById("quizResultView").classList.add("active");

    // Animate bars
    setTimeout(() => {
        document.querySelectorAll(".rank-bar-fill").forEach(b => {
            b.style.width = b.getAttribute("data-w") + "%";
        });
    }, 400);

    // Confetti effect
    launchConfetti();
    showToast("🎉 สรุปคะแนนประเมินเรียบร้อยแล้ว! ดูผลคณะอันดับ 1 ของคุณได้เลย", "success");
}

if (btnStartQuiz) btnStartQuiz.addEventListener("click", startFacultyQuiz);
if (btnRestartQuiz) btnRestartQuiz.addEventListener("click", startFacultyQuiz);


// ========================================
// 5. MODULE 2: EXAM HUB (STUDY & EXAMS)
// ========================================

let activeExamState = {
    examId: null,
    questions: [],
    index: 0,
    score: 0
};

function renderExamHub() {
    checkExamDailyLimitReset();
    updateWalletUI();
    const limitText = document.getElementById("examDailyLimitText");
    if (limitText) {
        let text = `วันนี้ทำไปแล้ว: ${state.examLimit.count} / 40 ข้อ`;
        if (state.examLimit.count > 0) {
            text += ` ⏳ (ฟื้นฟูโควตาฟรี: 1 ข้อ/นาที)`;
        }
        limitText.textContent = text;
        if (state.examLimit.count >= 40) {
            limitText.style.background = "rgba(239, 68, 68, 0.15)";
            limitText.style.borderColor = "rgba(239, 68, 68, 0.3)";
            limitText.style.color = "var(--danger)";
        } else {
            limitText.style.background = "rgba(99, 102, 241, 0.15)";
            limitText.style.borderColor = "rgba(99, 102, 241, 0.3)";
            limitText.style.color = "var(--accent-3)";
        }
    }

    const centralGrid = document.getElementById("centralExamGrid");
    const regionalGrid = document.getElementById("regionalExamGrid");

    centralGrid.innerHTML = "";
    regionalGrid.innerHTML = "";

    EXAMS_DATABASE.forEach(exam => {
        const card = document.createElement("div");
        card.className = "exam-card";
        
        let rewardEmoji = "🍔";
        if (exam.rewardType === "raw_leaves") rewardEmoji = "🥬";
        if (exam.rewardType === "raw_meat") rewardEmoji = "🥩";
        if (exam.rewardType === "raw_berry") rewardEmoji = "🫐";
        if (exam.rewardType === "raw_ore") rewardEmoji = "⛰️";
        if (exam.rewardType === "raw_crystal") rewardEmoji = "💎";
        if (exam.rewardType === "raw_fish") rewardEmoji = "🐟";

        card.innerHTML = `
            <span class="exam-card-icon">📝</span>
            <h3 class="exam-card-title">${exam.title}</h3>
            <p class="exam-card-desc">${exam.desc}</p>
            <div class="exam-card-reward">🎁 ของรางวัล: ${rewardEmoji} ${RAW_ITEMS[exam.rewardType].name}</div>
        `;

        card.addEventListener("click", () => startExam(exam));

        if (exam.category === "central") {
            centralGrid.appendChild(card);
        } else {
            regionalGrid.appendChild(card);
        }
    });
}

function startExam(exam) {
    checkExamDailyLimitReset();
    // Billing system removed for questions - doing exams is always free!

    activeExamState.examId = exam.id;
    activeExamState.questions = shuffleArray(exam.questions);
    activeExamState.index = 0;
    activeExamState.score = 0;
    activeExamState.isPaid = false;

    document.getElementById("activeExamTitle").textContent = exam.title;

    document.getElementById("examHubView").classList.remove("active");
    document.getElementById("examActiveView").classList.add("active");
    document.getElementById("examResultView").classList.remove("active");

    renderExamQuestion();
}

function renderExamQuestion() {
    if (activeExamState.index >= activeExamState.questions.length) {
        finishExam();
        return;
    }

    const q = activeExamState.questions[activeExamState.index];
    const container = document.getElementById("examChoicesContainer");

    // Progress
    const total = activeExamState.questions.length;
    const progress = (activeExamState.index / total) * 100;
    document.getElementById("examProgressText").textContent = `ข้อ ${activeExamState.index + 1} / ${total}`;
    document.getElementById("examProgressPercent").textContent = `${Math.round(progress)}%`;
    document.getElementById("examProgressFill").style.width = `${progress}%`;

    document.getElementById("examQuestionText").textContent = q.q;
    container.innerHTML = "";

    q.c.forEach((choice, idx) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerHTML = `<span class="choice-label">${idx + 1}</span> <span class="choice-text">${choice}</span>`;
        btn.addEventListener("click", () => selectExamChoice(idx));
        container.appendChild(btn);
    });
}

function selectExamChoice(selectedIdx) {
    checkExamDailyLimitReset();
    if (!activeExamState.isPaid && state.examLimit.count < 40) {
        state.examLimit.count++;
        saveState();
    }

    const q = activeExamState.questions[activeExamState.index];
    const isCorrect = selectedIdx === q.a;

    if (isCorrect) {
        activeExamState.score++;
        showToast("ถูกต้อง! เก่งมาก 🌟", "success");
    } else {
        showToast("ยังไม่ถูกนะ ลองทบทวนเพิ่มเติม 💡", "danger");
    }

    const btns = document.querySelectorAll("#examChoicesContainer .choice-btn");
    btns.forEach((btn, idx) => {
        btn.style.pointerEvents = "none";
        if (idx === q.a) {
            btn.classList.add("selected"); // Green glow in effect
        }
    });

    setTimeout(() => {
        activeExamState.index++;
        renderExamQuestion();
    }, 800);
}

function finishExam() {
    const exam = EXAMS_DATABASE.find(e => e.id === activeExamState.examId);
    const score = activeExamState.score;
    const total = activeExamState.questions.length;

    document.getElementById("examResultScoreText").textContent = `คุณตอบถูกต้องทั้งหมด ${score} / ${total} ข้อ`;

    // Award items based on score
    // Min 1 item if score > 0, scaling with correct answers
    const rewardQty = Math.max(0, score);
    const rewardList = document.getElementById("rewardItemsList");
    rewardList.innerHTML = "";

    if (rewardQty > 0) {
        // Add to inventory state
        state.inventory[exam.rewardType] = (state.inventory[exam.rewardType] || 0) + rewardQty;
        
        // Increase keeper exp slightly
        state.user.level = Math.min(50, state.user.level + 1);

        const card = document.createElement("div");
        card.className = "reward-item-card";
        card.innerHTML = `
            <span class="reward-item-emoji">${RAW_ITEMS[exam.rewardType].emoji}</span>
            <span class="reward-item-name">${RAW_ITEMS[exam.rewardType].name}</span>
            <span class="reward-item-qty">+${rewardQty} ชิ้น</span>
        `;
        rewardList.appendChild(card);
        saveState();
        showToast(`📚 สอบทบทวนวิชาสำเร็จ! ได้รับ ${RAW_ITEMS[exam.rewardType].name} จำนวน ${rewardQty} ชิ้น`, "success");
    } else {
        rewardList.innerHTML = `<p class="muted-text">เสียใจด้วย คุณตอบไม่ถูกเลย จึงไม่ได้รับวัตถุดิบอาหาร พยายามใหม่อีกครั้งนะ!</p>`;
    }

    document.getElementById("examActiveView").classList.remove("active");
    document.getElementById("examResultView").classList.add("active");
}

document.getElementById("btnBackToExamHub").addEventListener("click", () => {
    document.getElementById("examActiveView").classList.remove("active");
    document.getElementById("examHubView").classList.add("active");
    renderExamHub();
});

document.getElementById("btnFinishExamAndClaim").addEventListener("click", () => {
    document.getElementById("examResultView").classList.remove("active");
    document.getElementById("examHubView").classList.add("active");
    renderExamHub();
});


// ========================================
// 6. MODULE 3: DINOSAUR PET GAME
// ========================================

let craftIngredients = [];

function renderInventoryUI() {
    const rawContainer = document.getElementById("rawInventoryGrid");
    const craftedContainer = document.getElementById("craftedInventoryGrid");
    const craftMaterialsGrid = document.getElementById("craftMaterialsGrid");

    rawContainer.innerHTML = "";
    craftedContainer.innerHTML = "";
    craftMaterialsGrid.innerHTML = "";

    // Render Raw Materials (Leaves, Meat, Berry, Ore)
    Object.entries(RAW_ITEMS).forEach(([key, meta]) => {
        const qty = state.inventory[key] || 0;
        
        // Render in inventory tab
        const itemCard = document.createElement("div");
        itemCard.className = "inv-item-card";
        itemCard.innerHTML = `
            <span class="inv-item-qty">${qty}</span>
            <span class="inv-item-emoji">${meta.emoji}</span>
            <span class="inv-item-name">${meta.name}</span>
        `;
        itemCard.addEventListener("click", () => feedDino(key));
        rawContainer.appendChild(itemCard);

        // Render in craft selection grid
        const craftCard = document.createElement("div");
        craftCard.className = "inv-item-card";
        craftCard.innerHTML = `
            <span class="inv-item-qty">${qty}</span>
            <span class="inv-item-emoji">${meta.emoji}</span>
            <span class="inv-item-name">${meta.name}</span>
        `;
        craftCard.addEventListener("click", () => selectForCrafting(key));
        craftMaterialsGrid.appendChild(craftCard);
    });

    // Render Crafted Foods (Salad, Steak, Soup, Magma Fruit)
    Object.entries(CRAFTED_ITEMS).forEach(([key, meta]) => {
        const qty = state.inventory[key] || 0;
        const itemCard = document.createElement("div");
        itemCard.className = "inv-item-card";
        itemCard.innerHTML = `
            <span class="inv-item-qty">${qty}</span>
            <span class="inv-item-emoji">${meta.emoji}</span>
            <span class="inv-item-name">${meta.name}</span>
        `;
        itemCard.addEventListener("click", () => feedDino(key));
        craftedContainer.appendChild(itemCard);
    });
}

function feedDino(itemKey) {
    if (state.dino.stage === "dead") {
        showToast("⚠️ ไดโนเสาร์ของคุณเสียชีวิตแล้ว ต้องรีเซ็ตเริ่มเลี้ยงใหม่ก่อนป้อนอาหาร!", "danger");
        return;
    }

    if ((state.inventory[itemKey] || 0) <= 0) {
        showToast("❌ คุณไม่มีวัตถุดิบชนิดนี้ในคลังข้อสอบแล้ว! ติววิชาเพิ่มเพื่อสะสมอาหาร", "danger");
        return;
    }

    // Deduct inventory
    state.inventory[itemKey]--;

    // Hunger increase
    const feedVals = {
        raw_leaves: { hunger: 15, mood: 10, exp: 10, herbi: 1, carni: 0, cyb: 0 },
        raw_meat: { hunger: 15, mood: 10, exp: 10, herbi: 0, carni: 1, cyb: 0 },
        raw_berry: { hunger: 20, mood: 20, exp: 20, herbi: 1, carni: 0, cyb: 0 },
        raw_ore: { hunger: 10, mood: 10, exp: 15, herbi: 0, carni: 0, cyb: 1 },
        // Premium meals
        salad_premium: { hunger: 40, mood: 30, exp: 40, herbi: 3, carni: 0, cyb: 0 },
        steak_perfect: { hunger: 40, mood: 30, exp: 40, herbi: 0, carni: 3, cyb: 0 },
        soup_mix: { hunger: 30, mood: 25, exp: 30, herbi: 1.5, carni: 1.5, cyb: 0 },
        magma_fruit: { hunger: 50, mood: 50, exp: 60, herbi: 0, carni: 2, cyb: 2 }
    };

    const effect = feedVals[itemKey];
    state.dino.hunger = Math.min(100, state.dino.hunger + effect.hunger);
    state.dino.mood = Math.min(100, state.dino.mood + effect.mood);
    
    // Growth point
    state.dino.herbivoreCount += effect.herbi;
    state.dino.carnivoreCount += effect.carni;
    state.dino.cyborgCount += effect.cyb;

    // Check evolution threshold
    const oldStage = state.dino.stage;
    state.dino.exp += effect.exp;

    if (state.dino.exp >= 100) {
        state.dino.exp -= 100;
        triggerEvolution();
    }

    // Set interactive visual response
    const dinoText = document.getElementById("dinoRender");
    dinoText.classList.add("eating");
    
    // Bubble dialogue
    const phrases = ["ง่ำๆๆๆ อร่อยจัง! 😋", "เย้! อิ่มท้องแล้ว 💖", "พลังแห่งความรู้คำนวณสำเร็จ! 🦖", "อร่อยเหาะไปเลยจ้า! 🎉"];
    document.getElementById("dinoBubble").textContent = phrases[Math.floor(Math.random() * phrases.length)];

    setTimeout(() => {
        dinoText.classList.remove("eating");
    }, 1500);

    saveState();
    renderInventoryUI();
    updateDinoUI();

    showToast(`🍖 ป้อน ${RAW_ITEMS[itemKey]?.name || CRAFTED_ITEMS[itemKey]?.name} ให้ไดโนเสาร์เรียบร้อย!`, "success");
}

function triggerEvolution() {
    if (state.dino.stage === "egg") {
        state.dino.stage = "baby";
        showToast("🐣 ไข่ฟักออกเป็นตัวเรียบร้อย! ไดโนเสาร์ตัวน้อยถือกำเนิดขึ้นแล้ว", "success");
    } else if (state.dino.stage === "baby") {
        state.dino.stage = "teen";
        showToast("🦕 ไดโนเสาร์น้อยเติบโตขึ้นเป็น วัยรุ่น แล้ว! คอยป้อนสูตรอาหารเฉพาะเพื่อนำร่างถัดไป", "success");
    } else if (state.dino.stage === "teen") {
        // Evaluate points
        const h = state.dino.herbivoreCount;
        const c = state.dino.carnivoreCount;
        const cy = state.dino.cyborgCount;

        if (cy >= h && cy >= c) {
            state.dino.stage = "adult_cyborg";
            showToast("🤖 ไดโนเสาร์เติบโตเต็มที่ เป็นไซบอร์กสุดล้ำ!", "success");
        } else if (c >= h) {
            state.dino.stage = "adult_carnivore";
            showToast("🔥 ทีเร็กซ์สยบไฟลุกพัดสระถือกำเนิดอย่างสง่าผ่าเผย!", "success");
        } else {
            state.dino.stage = "adult_herbivore";
            showToast("🐉 มังกรเขียวสายกินพืชขนาดยักษ์อันสง่างามและเป็นมิตร!", "success");
        }
    } else {
        if (!state.dinoCollection) state.dinoCollection = [];
        
        state.dinoCollection.push({
            name: state.dino.name,
            stage: state.dino.stage,
            evolvedAt: Date.now()
        });

        showToast(`🎉 ยินดีด้วย! ${state.dino.name} ได้รับการเลี้ยงดูจนเติบโตสมบูรณ์เต็มวัย และเข้าสู่ทำเนียบคู่หูสะสมแล้ว!`, "success");

        // Reset to egg
        state.dino = {
            name: "น้องก็อตจิคนใหม่",
            stage: "egg",
            exp: 0,
            hunger: 100,
            mood: 100,
            emotion: "ดีใจ",
            herbivoreCount: 0,
            carnivoreCount: 0,
            cyborgCount: 0,
            lastLoginDate: Date.now()
        };
        saveState();
        updateDinoUI();
        
        const colBtn = document.getElementById("tabCollectionBtn");
        if (colBtn && colBtn.classList.contains("active")) {
            renderDinoCollection();
        }
    }
}

// Crafting Recipe Logic
function selectForCrafting(itemKey) {
    if (state.inventory[itemKey] <= 0) {
        showToast("❌ คุณไม่มีวัตถุดิบชนิดนี้เพียงพอที่จะทำการผสมสูตร", "danger");
        return;
    }

    if (craftIngredients.length < 2) {
        craftIngredients.push(itemKey);
        updateCraftSlots();
    }
}

function updateCraftSlots() {
    const slot1 = document.getElementById("craftSlot1");
    const slot2 = document.getElementById("craftSlot2");
    const btn = document.getElementById("btnCraftFood");

    // Reset Slots first
    slot1.innerHTML = `<span class="slot-placeholder">ช่องที่ 1</span>`;
    slot2.innerHTML = `<span class="slot-placeholder">ช่องที่ 2</span>`;
    
    if (craftIngredients[0]) {
        slot1.innerHTML = `<span class="slot-filled">${RAW_ITEMS[craftIngredients[0]].emoji}</span>`;
    }
    if (craftIngredients[1]) {
        slot2.innerHTML = `<span class="slot-filled">${RAW_ITEMS[craftIngredients[1]].emoji}</span>`;
    }

    btn.disabled = craftIngredients.length < 2;
}

function craftFood() {
    if (craftIngredients.length < 2) return;

    const ing1 = craftIngredients[0];
    const ing2 = craftIngredients[1];

    // Check if we have the items actually in inventory
    if (state.inventory[ing1] <= 0 || state.inventory[ing2] <= 0) {
        showToast("❌ วัตถุดิบในคลังไม่เพียงพอ กรุณาลองใหม่", "danger");
        craftIngredients = [];
        updateCraftSlots();
        return;
    }

    // Try to find matching recipe
    let craftedKey = null;
    Object.entries(CRAFTED_ITEMS).forEach(([key, meta]) => {
        const form = meta.formula;
        if ((form[0] === ing1 && form[1] === ing2) || (form[0] === ing2 && form[1] === ing1)) {
            craftedKey = key;
        }
    });

    if (craftedKey) {
        // Success
        state.inventory[ing1]--;
        state.inventory[ing2]--;
        state.inventory[craftedKey]++;
        
        saveState();
        renderInventoryUI();
        showToast(`🍳 ปรุงสำเร็จ! ได้รับ ${CRAFTED_ITEMS[craftedKey].name} 1 จาน`, "success");
    } else {
        // Fail
        showToast("💨 การผสมสูตรล้มเหลว! วัตถุดิบทั้งสองเข้ากันไม่ได้ สูญเสียพลังงานผสม", "danger");
    }

    // Reset crafting arena
    craftIngredients = [];
    updateCraftSlots();
}

// Click slots to clear ingredients
document.getElementById("craftSlot1").addEventListener("click", () => {
    craftIngredients.shift();
    updateCraftSlots();
});
document.getElementById("craftSlot2").addEventListener("click", () => {
    if (craftIngredients.length === 2) craftIngredients.pop();
    updateCraftSlots();
});
document.getElementById("btnCraftFood").addEventListener("click", craftFood);

// Tab switches in Dino Sanctuary
document.getElementById("tabInventoryBtn").addEventListener("click", () => {
    document.getElementById("tabInventoryBtn").classList.add("active");
    document.getElementById("tabRecipeBtn").classList.remove("active");
    document.getElementById("tabCollectionBtn").classList.remove("active");
    document.getElementById("inventoryPanel").classList.add("active");
    document.getElementById("recipePanel").classList.remove("active");
    document.getElementById("collectionPanel").classList.remove("active");
});
document.getElementById("tabRecipeBtn").addEventListener("click", () => {
    document.getElementById("tabRecipeBtn").classList.add("active");
    document.getElementById("tabInventoryBtn").classList.remove("active");
    document.getElementById("tabCollectionBtn").classList.remove("active");
    document.getElementById("recipePanel").classList.add("active");
    document.getElementById("inventoryPanel").classList.remove("active");
    document.getElementById("collectionPanel").classList.remove("active");
});
document.getElementById("tabCollectionBtn").addEventListener("click", () => {
    document.getElementById("tabCollectionBtn").classList.add("active");
    document.getElementById("tabInventoryBtn").classList.remove("active");
    document.getElementById("tabRecipeBtn").classList.remove("active");
    document.getElementById("collectionPanel").classList.add("active");
    document.getElementById("inventoryPanel").classList.remove("active");
    document.getElementById("recipePanel").classList.remove("active");
    renderDinoCollection();
});


// ========================================
// 7. MODULE 4: STUDY BUDDY MATCHER
// ========================================

function renderStudyBuddies() {
    const list = document.getElementById("buddyListContainer");
    list.innerHTML = "";

    // Filter/Match calculations
    MOCK_BUDDIES.forEach(buddy => {
        let matchRate = 50; // base rate

        // Check matching faculty
        if (state.user.evaluatedFaculty && state.user.evaluatedFaculty === buddy.idealFaculty) {
            matchRate += 30;
        }

        // Check matching strength
        if (state.user.strengths === buddy.strength) {
            matchRate += 10;
        }

        // Check matching style
        if (state.user.studyStyle === buddy.studyStyle) {
            matchRate += 10;
        }

        const facultyData = FACULTIES[buddy.idealFaculty];
        const strengthLabels = {
            math: "คณิตศาสตร์",
            science: "วิทยาศาสตร์",
            languages: "ภาษาต่างประเทศ",
            society: "สังคม/ไทย",
            art_design: "ศิลปะ/ออกแบบ"
        };
        const styleLabels = {
            silent: "อ่านคนเดียวเงียบๆ",
            group: "แลกเปลี่ยนติวกลุ่ม",
            exam: "ตะลุยโจทย์ข้อสอบ"
        };

        const card = document.createElement("div");
        card.className = "buddy-card";
        card.innerHTML = `
            <div class="match-rate-wrap">
                <div class="match-circle" style="background: conic-gradient(var(--accent-1) ${matchRate}%, rgba(255, 255, 255, 0.05) ${matchRate}%)">
                    <span>${matchRate}%</span>
                </div>
                <span class="match-lbl">เข้ากันได้</span>
            </div>

            <div class="buddy-info">
                <div class="buddy-top-info">
                    <h4>${buddy.name}</h4>
                    <span class="buddy-faculty-tag">${facultyData.icon} สนใจ: ${facultyData.name}</span>
                </div>
                <div class="buddy-details-grid">
                    <div>
                        <span class="detail-lbl">วิชาถนัด:</span>
                        <p class="detail-val">${strengthLabels[buddy.strength]}</p>
                    </div>
                    <div>
                        <span class="detail-lbl">สไตล์การเรียน:</span>
                        <p class="detail-val">${styleLabels[buddy.studyStyle]}</p>
                    </div>
                    <div>
                        <span class="detail-lbl">กิจกรรมสนใจ:</span>
                        <p class="detail-val">${buddy.interests}</p>
                    </div>
                </div>
            </div>

            <div class="buddy-action">
                <button class="btn-primary" onclick="connectBuddy('${buddy.name}', '${buddy.discord}')">
                    ส่งคำขอติดต่อติว
                </button>
            </div>
        `;
        list.appendChild(card);
    });
}

function connectBuddy(name, discordId) {
    if (!currentLoggedInUser) {
        showToast("⚠️ กรุณาล็อกอินก่อน", "danger");
        return;
    }
    // Send actual friend request
    sendFriendRequest(name);
}

document.getElementById("btnUpdateBuddyProfile").addEventListener("click", () => {
    state.user.strengths = document.getElementById("buddyIntField").value;
    state.user.studyStyle = document.getElementById("buddyPrefStyle").value;
    saveState();
    renderStudyBuddies();
    showToast("⚙️ อัปเดตข้อมูลสไตล์การเรียนของคุณแล้ว จับคู่สำเร็จ!", "success");
});


// ========================================
// 7B. FRIEND REQUEST SYSTEM
// ========================================

const FRIEND_REQUESTS_KEY = "dino_learn_friend_requests";
const CHATS_DB_KEY = "dino_learn_chats_db";
const REPORTS_DB_KEY = "dino_learn_reports_db";

let activeChatId = null;

// -- Friend Requests --
function getFriendRequests() {
    try {
        return JSON.parse(localStorage.getItem(FRIEND_REQUESTS_KEY) || "[]");
    } catch(e) { return []; }
}
function saveFriendRequests(reqs) {
    localStorage.setItem(FRIEND_REQUESTS_KEY, JSON.stringify(reqs));
}

function sendFriendRequest(toName) {
    if (!currentLoggedInUser) return;
    const from = currentLoggedInUser;
    if (from.toLowerCase() === toName.toLowerCase()) {
        showToast("❌ ไม่สามารถส่งคำขอเพื่อนให้ตัวเองได้", "danger");
        return;
    }
    const reqs = getFriendRequests();
    // Check if already sent or already friends
    const existing = reqs.find(r =>
        (r.from.toLowerCase() === from.toLowerCase() && r.to.toLowerCase() === toName.toLowerCase()) ||
        (r.from.toLowerCase() === toName.toLowerCase() && r.to.toLowerCase() === from.toLowerCase())
    );
    if (existing) {
        if (existing.status === "accepted") {
            showToast(`✅ คุณเป็นเพื่อนกับ ${toName} อยู่แล้ว!`, "success");
        } else if (existing.status === "pending") {
            showToast(`⏳ มีคำขอเพื่อนกับ ${toName} รออยู่แล้ว`, "warning");
        } else {
            // rejected before, can resend
            existing.status = "pending";
            existing.timestamp = Date.now();
            existing.from = from;
            existing.to = toName;
            saveFriendRequests(reqs);
            showToast(`📩 ส่งคำขอเพื่อนถึง ${toName} อีกครั้งแล้ว!`, "success");
        }
        return;
    }
    reqs.push({
        from: from,
        to: toName,
        timestamp: Date.now(),
        status: "pending"
    });
    saveFriendRequests(reqs);
    showToast(`📩 ส่งคำขอเพื่อนถึง ${toName} สำเร็จ! รอการตอบรับ`, "success");

    // Auto-accept for bot buddies
    const bot = MOCK_BUDDIES.find(b => b.name === toName && b.isBot);
    if (bot) {
        setTimeout(() => {
            acceptFriendRequestByName(from, toName);
            showToast(`🎉 ${toName} ตอบรับคำขอเพื่อนของคุณแล้ว!`, "success");
        }, 1500);
    }
}

function acceptFriendRequestByName(fromName, toName) {
    const reqs = getFriendRequests();
    const req = reqs.find(r => r.from.toLowerCase() === fromName.toLowerCase() && r.to.toLowerCase() === toName.toLowerCase() && r.status === "pending");
    if (req) {
        req.status = "accepted";
        req.acceptedAt = Date.now();
        saveFriendRequests(reqs);
    }
}

function acceptFriendRequest(index) {
    const reqs = getFriendRequests();
    if (reqs[index]) {
        reqs[index].status = "accepted";
        reqs[index].acceptedAt = Date.now();
        saveFriendRequests(reqs);
        showToast(`🎉 ตอบรับเพื่อน ${reqs[index].from} แล้ว!`, "success");
        renderFriendRequests();
    }
}

function rejectFriendRequest(index) {
    const reqs = getFriendRequests();
    if (reqs[index]) {
        reqs[index].status = "rejected";
        saveFriendRequests(reqs);
        showToast(`❌ ปฏิเสธคำขอจาก ${reqs[index].from}`, "danger");
        renderFriendRequests();
    }
}

function getMyFriends() {
    if (!currentLoggedInUser) return [];
    const me = currentLoggedInUser.toLowerCase();
    const reqs = getFriendRequests();
    const friends = [];
    reqs.forEach(r => {
        if (r.status === "accepted") {
            if (r.from.toLowerCase() === me) friends.push(r.to);
            else if (r.to.toLowerCase() === me) friends.push(r.from);
        }
    });
    return [...new Set(friends)];
}

function renderFriendRequests() {
    if (!currentLoggedInUser) return;
    const me = currentLoggedInUser.toLowerCase();
    const reqs = getFriendRequests();

    // Incoming
    const incoming = reqs.filter(r => r.to.toLowerCase() === me && r.status === "pending");
    const inList = document.getElementById("incomingReqList");
    if (incoming.length === 0) {
        inList.innerHTML = '<p class="muted-text">ยังไม่มีคำขอเพื่อนเข้ามา</p>';
    } else {
        inList.innerHTML = incoming.map((r, idx) => {
            const realIdx = reqs.indexOf(r);
            return `<div class="friend-req-card">
                <div class="freq-info">
                    <span class="freq-avatar">👤</span>
                    <div>
                        <h4>${r.from}</h4>
                        <span class="freq-time">${new Date(r.timestamp).toLocaleDateString('th-TH')}</span>
                    </div>
                </div>
                <div class="freq-actions">
                    <button class="btn-accept" onclick="acceptFriendRequest(${realIdx})">✅ ตอบรับ</button>
                    <button class="btn-reject" onclick="rejectFriendRequest(${realIdx})">❌ ปฏิเสธ</button>
                </div>
            </div>`;
        }).join("");
    }

    // Outgoing
    const outgoing = reqs.filter(r => r.from.toLowerCase() === me && r.status === "pending");
    const outList = document.getElementById("outgoingReqList");
    if (outgoing.length === 0) {
        outList.innerHTML = '<p class="muted-text">ยังไม่ได้ส่งคำขอเพื่อน</p>';
    } else {
        outList.innerHTML = outgoing.map(r => {
            return `<div class="friend-req-card outgoing">
                <div class="freq-info">
                    <span class="freq-avatar">👤</span>
                    <div>
                        <h4>${r.to}</h4>
                        <span class="freq-time">⏳ รอตอบรับ</span>
                    </div>
                </div>
            </div>`;
        }).join("");
    }

    // Badge
    const badge = document.getElementById("friendReqBadge");
    const navBadge = document.getElementById("navChatBadge");
    if (incoming.length > 0) {
        badge.style.display = "inline-flex";
        badge.textContent = incoming.length;
        navBadge.style.display = "inline-flex";
        navBadge.textContent = incoming.length;
    } else {
        badge.style.display = "none";
        navBadge.style.display = "none";
    }
}

function renderFriendsList() {
    const friends = getMyFriends();
    const grid = document.getElementById("friendsGrid");

    if (friends.length === 0) {
        grid.innerHTML = '<p class="muted-text">ยังไม่มีเพื่อน เริ่มเพิ่มเพื่อนได้ที่หน้า "หาเพื่อนเรียน"</p>';
        return;
    }

    grid.innerHTML = friends.map(f => {
        return `<div class="friend-card">
            <span class="friend-avatar">👤</span>
            <div class="friend-name">${f}</div>
            <button class="btn-secondary btn-sm" onclick="openDirectChat('${f}')">💬 แชท</button>
        </div>`;
    }).join("");
}

// -- Chat System --
function getChatsDB() {
    try {
        return JSON.parse(localStorage.getItem(CHATS_DB_KEY) || "{}");
    } catch(e) { return {}; }
}
function saveChatsDB(db) {
    localStorage.setItem(CHATS_DB_KEY, JSON.stringify(db));
}

function openDirectChat(friendName) {
    if (!currentLoggedInUser) return;
    const me = currentLoggedInUser;
    const db = getChatsDB();

    // Find existing DM
    const chatId = Object.keys(db).find(id => {
        const c = db[id];
        return c.type === "dm" && c.members.length === 2 &&
            c.members.map(m => m.toLowerCase()).includes(me.toLowerCase()) &&
            c.members.map(m => m.toLowerCase()).includes(friendName.toLowerCase());
    });

    if (chatId) {
        openChatView(chatId);
    } else {
        // Create new DM
        const newId = `dm_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
        db[newId] = {
            id: newId,
            type: "dm",
            name: `${me} & ${friendName}`,
            members: [me, friendName],
            messages: [],
            createdAt: Date.now(),
            createdBy: me
        };
        saveChatsDB(db);
        openChatView(newId);
    }
}

function createGroupChat() {
    if (!currentLoggedInUser) return;
    const groupName = document.getElementById("groupNameInput").value.trim();
    if (!groupName) {
        showToast("⚠️ กรุณาตั้งชื่อกลุ่ม", "danger");
        return;
    }

    // Get selected members
    const checkboxes = document.querySelectorAll('#groupMembersSelect input[type="checkbox"]:checked');
    const selectedMembers = Array.from(checkboxes).map(cb => cb.value);

    if (selectedMembers.length === 0) {
        showToast("⚠️ เลือกเพื่อนอย่างน้อย 1 คนเข้ากลุ่ม", "danger");
        return;
    }

    const members = [currentLoggedInUser, ...selectedMembers];
    const db = getChatsDB();
    const newId = `grp_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    db[newId] = {
        id: newId,
        type: "group",
        name: groupName,
        members: members,
        messages: [{
            from: "🤖 ระบบ",
            text: `กลุ่ม "${groupName}" ถูกสร้างโดย ${currentLoggedInUser} - สมาชิก: ${members.join(", ")}`,
            timestamp: Date.now()
        }],
        createdAt: Date.now(),
        createdBy: currentLoggedInUser
    };
    saveChatsDB(db);
    document.getElementById("groupNameInput").value = "";
    showToast(`🎉 สร้างกลุ่ม "${groupName}" สำเร็จ!`, "success");
    openChatView(newId);
}

function renderGroupMembersSelect() {
    const friends = getMyFriends();
    const container = document.getElementById("groupMembersSelect");

    if (friends.length === 0) {
        container.innerHTML = '<p class="muted-text">ต้องมีเพื่อนก่อนถึงจะเลือกได้ ไปเพิ่มเพื่อนที่ "หาเพื่อนเรียน" ก่อนนะ</p>';
        return;
    }

    container.innerHTML = friends.map(f => {
        return `<label class="member-checkbox">
            <input type="checkbox" value="${f}">
            <span class="member-name">👤 ${f}</span>
        </label>`;
    }).join("");
}

function renderChatsList() {
    if (!currentLoggedInUser) return;
    const me = currentLoggedInUser.toLowerCase();
    const db = getChatsDB();
    const container = document.getElementById("chatsList");

    const myChats = Object.values(db).filter(c =>
        c.members.map(m => m.toLowerCase()).includes(me)
    ).sort((a, b) => {
        const aLast = a.messages.length ? a.messages[a.messages.length - 1].timestamp : a.createdAt;
        const bLast = b.messages.length ? b.messages[b.messages.length - 1].timestamp : b.createdAt;
        return bLast - aLast;
    });

    if (myChats.length === 0) {
        container.innerHTML = '<p class="muted-text">ยังไม่มีการสนทนา เริ่มแชทกับเพื่อนได้เลย!</p>';
        return;
    }

    container.innerHTML = myChats.map(c => {
        const lastMsg = c.messages.length ? c.messages[c.messages.length - 1] : null;
        const typeIcon = c.type === "group" ? "👥" : "💬";
        const displayName = c.type === "dm"
            ? c.members.find(m => m.toLowerCase() !== me) || c.name
            : c.name;
        const preview = lastMsg
            ? `${lastMsg.from === currentLoggedInUser ? "คุณ" : lastMsg.from}: ${lastMsg.text.substring(0, 30)}${lastMsg.text.length > 30 ? "..." : ""}`
            : "ยังไม่มีข้อความ";
        const timeStr = lastMsg
            ? new Date(lastMsg.timestamp).toLocaleTimeString('th-TH', {hour: '2-digit', minute: '2-digit'})
            : "";

        return `<div class="chat-list-item" onclick="openChatView('${c.id}')">
            <span class="chat-item-icon">${typeIcon}</span>
            <div class="chat-item-info">
                <div class="chat-item-name">${displayName}</div>
                <div class="chat-item-preview">${preview}</div>
            </div>
            <span class="chat-item-time">${timeStr}</span>
        </div>`;
    }).join("");
}

function openChatView(chatId) {
    const db = getChatsDB();
    const chat = db[chatId];
    if (!chat) return;

    activeChatId = chatId;

    // Hide all panels, show active chat
    document.querySelectorAll(".chat-panel").forEach(p => {
        p.classList.remove("active");
        p.style.display = "none";
    });
    document.querySelectorAll(".chat-tab-btn").forEach(b => b.classList.remove("active"));

    const chatPanel = document.getElementById("activeChatPanel");
    chatPanel.style.display = "block";
    chatPanel.classList.add("active");

    // Hide tabs
    document.querySelector(".chat-tabs").style.display = "none";

    const me = currentLoggedInUser;
    const displayName = chat.type === "dm"
        ? chat.members.find(m => m.toLowerCase() !== me.toLowerCase()) || chat.name
        : chat.name;

    document.getElementById("activeChatName").textContent = chat.type === "group" ? `👥 ${displayName}` : `💬 ${displayName}`;
    document.getElementById("activeChatMembers").textContent = chat.type === "group"
        ? `สมาชิก: ${chat.members.join(", ")} (${chat.members.length} คน)`
        : "";

    renderChatMessages();

    // Focus input
    setTimeout(() => document.getElementById("chatMessageInput").focus(), 200);
}

function closeChatView() {
    activeChatId = null;
    document.getElementById("activeChatPanel").style.display = "none";
    document.getElementById("activeChatPanel").classList.remove("active");

    // Show tabs and default panel again
    document.querySelector(".chat-tabs").style.display = "flex";
    switchChatTab("chatsListPanel");
}

function renderChatMessages() {
    if (!activeChatId) return;
    const db = getChatsDB();
    const chat = db[activeChatId];
    if (!chat) return;

    const container = document.getElementById("chatMessagesContainer");
    const me = currentLoggedInUser;

    if (chat.messages.length === 0) {
        container.innerHTML = '<p class="chat-empty">ยังไม่มีข้อความ เริ่มสนทนาเลย! 💬</p>';
    } else {
        container.innerHTML = chat.messages.map(msg => {
            const isMe = msg.from === me;
            const isSystem = msg.from === "🤖 ระบบ";
            if (isSystem) {
                return `<div class="chat-msg system"><span>${msg.text}</span></div>`;
            }
            return `<div class="chat-msg ${isMe ? 'sent' : 'received'}">
                <div class="msg-sender">${isMe ? "คุณ" : msg.from}</div>
                <div class="msg-bubble">${msg.text}</div>
                <div class="msg-time">${new Date(msg.timestamp).toLocaleTimeString('th-TH', {hour: '2-digit', minute: '2-digit'})}</div>
            </div>`;
        }).join("");
    }

    // Auto-scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    if (!activeChatId || !currentLoggedInUser) return;
    const input = document.getElementById("chatMessageInput");
    const text = input.value.trim();
    if (!text) return;

    const db = getChatsDB();
    const chat = db[activeChatId];
    if (!chat) return;

    chat.messages.push({
        from: currentLoggedInUser,
        text: text,
        timestamp: Date.now()
    });
    saveChatsDB(db);
    input.value = "";
    renderChatMessages();

    // Bot auto-reply for DM with bot buddies
    if (chat.type === "dm") {
        const otherMember = chat.members.find(m => m.toLowerCase() !== currentLoggedInUser.toLowerCase());
        const bot = MOCK_BUDDIES.find(b => b.name === otherMember && b.isBot);
        if (bot) {
            setTimeout(() => {
                const replies = [
                    "ได้เลยครับ! มาติวด้วยกัน 📖",
                    "เดี๋ยวเราสรุปโน้ตให้ดูนะ 📝",
                    "สู้ๆ นะ! ไม่ยากหรอก 💪",
                    "แบบฝึกหัดข้อนี้ลองดูวิธีคิดแบบนี้สิ 🤔",
                    "เข้าใจแล้ว! ขอบคุณที่อธิบายนะ 🙏",
                    "มาลองทำโจทย์ TCAS ด้วยกันมั้ย? 🎯",
                    "โอเค เดี๋ยวเจอกันตอนติวนะ! 🦖"
                ];
                const reply = replies[Math.floor(Math.random() * replies.length)];
                const dbFresh = getChatsDB();
                if (dbFresh[activeChatId]) {
                    dbFresh[activeChatId].messages.push({
                        from: otherMember,
                        text: reply,
                        timestamp: Date.now()
                    });
                    saveChatsDB(dbFresh);
                    if (activeChatId === chat.id) renderChatMessages();
                }
            }, 1000 + Math.random() * 2000);
        }
    }
}

function switchChatTab(panelId) {
    document.querySelectorAll(".chat-panel").forEach(p => {
        p.classList.remove("active");
        p.style.display = "";
    });
    document.querySelectorAll(".chat-tab-btn").forEach(b => b.classList.remove("active"));

    const panel = document.getElementById(panelId);
    if (panel) {
        panel.classList.add("active");
        panel.style.display = "";
    }

    // Activate the tab button
    const tabMap = {
        friendReqPanel: "tabFriendReqBtn",
        friendsListPanel: "tabFriendsListBtn",
        chatsListPanel: "tabChatsBtn",
        createGroupPanel: "tabCreateGroupBtn"
    };
    if (tabMap[panelId]) {
        document.getElementById(tabMap[panelId]).classList.add("active");
    }

    // Show tabs bar
    document.querySelector(".chat-tabs").style.display = "flex";
    document.getElementById("activeChatPanel").style.display = "none";

    // Render content
    if (panelId === "friendReqPanel") renderFriendRequests();
    if (panelId === "friendsListPanel") renderFriendsList();
    if (panelId === "chatsListPanel") renderChatsList();
    if (panelId === "createGroupPanel") renderGroupMembersSelect();
}

// -- Report System --
function getReportsDB() {
    try {
        return JSON.parse(localStorage.getItem(REPORTS_DB_KEY) || "[]");
    } catch(e) { return []; }
}
function saveReportsDB(reports) {
    localStorage.setItem(REPORTS_DB_KEY, JSON.stringify(reports));
}

function submitReport() {
    if (!currentLoggedInUser) {
        showToast("⚠️ กรุณาล็อกอินก่อน", "danger");
        return;
    }

    const title = document.getElementById("reportTitle").value.trim();
    const category = document.getElementById("reportCategory").value;
    const desc = document.getElementById("reportDesc").value.trim();

    if (!title) {
        showToast("⚠️ กรุณากรอกหัวข้อปัญหา", "danger");
        return;
    }
    if (!desc) {
        showToast("⚠️ กรุณาอธิบายรายละเอียดปัญหา", "danger");
        return;
    }

    const reports = getReportsDB();
    reports.push({
        id: `RPT-${Date.now()}`,
        from: currentLoggedInUser,
        title: title,
        category: category,
        description: desc,
        timestamp: Date.now(),
        status: "pending"
    });
    saveReportsDB(reports);

    // Clear form
    document.getElementById("reportTitle").value = "";
    document.getElementById("reportDesc").value = "";

    showToast("📤 ส่งรายงานปัญหาสำเร็จ! ทีมงานจะดำเนินการตรวจสอบ", "success");
    renderReportList();

    // Auto-respond after delay
    setTimeout(() => {
        const freshReports = getReportsDB();
        const lastReport = freshReports[freshReports.length - 1];
        if (lastReport && lastReport.status === "pending") {
            lastReport.status = "reviewing";
            lastReport.adminNote = "ทีมงานได้รับรายงานแล้ว กำลังตรวจสอบ";
            saveReportsDB(freshReports);
            renderReportList();
        }
    }, 3000);
}

function renderReportList() {
    if (!currentLoggedInUser) return;
    const reports = getReportsDB().filter(r => r.from === currentLoggedInUser);
    const container = document.getElementById("reportList");

    const categoryLabels = {
        bug: "🐛 บั๊ก",
        ui: "🎨 UI",
        feature: "💡 ฟีเจอร์",
        performance: "⚡ ความเร็ว",
        other: "📦 อื่นๆ"
    };

    const statusLabels = {
        pending: { text: "รอตรวจสอบ", cls: "status-pending" },
        reviewing: { text: "กำลังตรวจสอบ", cls: "status-reviewing" },
        resolved: { text: "แก้ไขแล้ว", cls: "status-resolved" }
    };

    if (reports.length === 0) {
        container.innerHTML = '<p class="muted-text">ยังไม่เคยส่งรายงาน</p>';
        return;
    }

    container.innerHTML = reports.reverse().map(r => {
        const st = statusLabels[r.status] || statusLabels.pending;
        return `<div class="report-item">
            <div class="report-item-header">
                <span class="report-id">${r.id}</span>
                <span class="report-status ${st.cls}">${st.text}</span>
            </div>
            <h4 class="report-item-title">${categoryLabels[r.category] || ""} ${r.title}</h4>
            <p class="report-item-desc">${r.description}</p>
            <span class="report-item-time">${new Date(r.timestamp).toLocaleString('th-TH')}</span>
            ${r.adminNote ? `<div class="report-admin-note">💬 ทีมงาน: ${r.adminNote}</div>` : ""}
        </div>`;
    }).join("");
}

// Add Enter key support for chat
document.getElementById("chatMessageInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
});


// ========================================
// 8. UPDATE UI HELPERS & VISUALS
// ========================================

function updateDashboardUI() {
    // Level
    document.getElementById("userLevelText").textContent = `Dino Keeper Lv.${state.user.level}`;
    document.getElementById("dashStreakVal").textContent = state.streak.count;
    const studyTimeEl = document.getElementById("dashStudyTimeVal");
    if (studyTimeEl) {
        studyTimeEl.textContent = state.studyTime || 0;
    }

    // Dino Mini Stats
    document.getElementById("dashDinoName").textContent = state.dino.name;
    
    const stageData = DINO_EVOLUTION_STAGES[state.dino.stage];
    document.getElementById("dashDinoStage").textContent = `ร่าง: ${stageData.label}`;
    document.getElementById("dashDinoVisual").textContent = stageData.emoji;
    document.getElementById("dashDinoEmotion").textContent = state.dino.emotion;

    const emotionBadge = document.getElementById("dashDinoEmotion");
    emotionBadge.className = "status-badge";
    if (state.dino.emotion === "โกรธ") emotionBadge.classList.add("angry");
    if (state.dino.emotion === "ตาย") emotionBadge.classList.add("dead");

    document.getElementById("dashHungerBar").style.width = `${state.dino.hunger}%`;
    document.getElementById("dashMoodBar").style.width = `${state.dino.mood}%`;

    // Recommended Faculty dashboard
    const facBox = document.getElementById("dashFacultyResult");
    if (state.user.evaluatedFaculty) {
        const fac = FACULTIES[state.user.evaluatedFaculty];
        facBox.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 0.5rem">${fac.icon}</div>
            <h4 style="font-weight: 700; font-size: 1.2rem">${fac.name}</h4>
            <p class="muted-text">${fac.desc}</p>
            <button class="btn-secondary" onclick="switchPage('quizPage')">ทำประเมินซ้ำอีกครั้ง</button>
        `;
    } else {
        facBox.innerHTML = `
            <p class="muted-text">ยังไม่มีประวัติการประเมิน เริ่มต้นประเมินได้ที่เมนู "ประเมินคณะ"</p>
            <button class="btn-primary" onclick="switchPage('quizPage')">เริ่มทำแบบประเมิน</button>
        `;
    }
}

function updateDinoUI() {
    const hungerVal = state.dino.hunger;
    const moodVal = state.dino.mood;
    const expVal = state.dino.exp;
    const stage = state.dino.stage;

    document.getElementById("dinoHungerFill").style.width = `${hungerVal}%`;
    document.getElementById("dinoMoodFill").style.width = `${moodVal}%`;
    document.getElementById("dinoExpFill").style.width = `${expVal}%`;

    const meta = DINO_EVOLUTION_STAGES[stage];
    const sprite = document.getElementById("dinoRender");
    sprite.textContent = meta.emoji;
    
    // Apply styling modifiers depending on emotion
    sprite.className = "dino-sprite-render";
    if (state.dino.emotion === "โกรธ") {
        sprite.classList.add("angry");
        document.getElementById("dinoBubble").textContent = "แง่งงง โกรธมากแล้วนะ! 😡";
    } else if (state.dino.emotion === "ตาย") {
        document.getElementById("dinoBubble").textContent = "หลับใหลถาวร... 💔";
    }

    document.getElementById("dinoStageBadge").textContent = meta.label;
    document.getElementById("dinoEmotionBadge").textContent = `ความอารมณ์: ${state.dino.emotion}`;

    // Show reset/revive options inside screen if dino is dead
    if (stage === "dead") {
        const screen = document.querySelector(".dino-visual-zone");
        if (screen) {
            screen.innerHTML = `
                <div class="text-center" style="z-index: 5; padding: 2rem;">
                    <div style="font-size: 4.5rem; margin-bottom: 1rem">🪦</div>
                    <h3 style="font-weight:700; font-size: 1.25rem; margin-bottom: 0.5rem;">ไดโนเสาร์ของคุณลาโลกไปแล้ว</h3>
                    <p class="muted-text" style="margin-bottom: 1.5rem; font-size: 0.9rem;">เนื่องจากขาดการดูแลป้อนอาหารและไม่ได้เข้าใช้แอปเกินกำหนด</p>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem; align-items: center; width: 100%;">
                        <button class="btn-primary" onclick="reviveDinoSystem()" style="background: linear-gradient(135deg, #10b981, #059669); border: none; box-shadow: 0 4px 15px rgba(16,185,129,0.3); font-weight:700; width: 100%; max-width: 280px; padding: 0.75rem 1rem;">
                            💖 ชุบชีวิตร่างเดิม (ราคา 50 บาท)
                        </button>
                        <button class="btn-secondary" onclick="resetDinoSystem()" style="font-size: 0.8rem; padding: 0.5rem 1.2rem; border-color: rgba(255,255,255,0.15); color: var(--text-secondary); width: 100%; max-width: 280px;">
                            🥚 เริ่มฟักไข่ใบใหม่ (เริ่มใหม่ฟรี)
                        </button>
                    </div>
                </div>
            `;
        }
    }
}

// Visual Dino Interaction Touch Click
document.getElementById("dinoRender").addEventListener("click", () => {
    if (state.dino.stage === "dead") return;
    const sprite = document.getElementById("dinoRender");
    sprite.style.transform = "scale(1.3) rotate(5deg)";
    
    const responses = ["จั๊กจี้จังเลย! 🦕", "รักเจ้าของที่สุด! ❤️", "ลูบตัวอุ่นดีนะ 🥰", "พร้อมตะลุยความรู้แล้ว! ✏️"];
    document.getElementById("dinoBubble").textContent = responses[Math.floor(Math.random() * responses.length)];

    setTimeout(() => {
        sprite.style.transform = "";
    }, 300);
});

// Toast Notifications Helper
function showToast(message, type = "success") {
    const toast = document.getElementById("uiToast");
    toast.textContent = message;
    toast.className = `dino-toast active ${type}`;
    
    setTimeout(() => {
        toast.classList.remove("active");
    }, 3000);
}


// ========================================
// 9. ANIMATIONS & UTILS (SHUFFLE/CONFETTI/PARTICLES)
// ========================================

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const colors = ['#6366f1', '#8b5cf6', '#a78bfa', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#f97316'];

    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 8 + 4,
            h: Math.random() * 5 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 8,
            speedX: (Math.random() - 0.5) * 4,
            speedY: Math.random() * 3 + 2,
            opacity: 1
        });
    }

    let frame = 0;
    const maxFrames = 150;

    function animate() {
        frame++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;
            if (frame > maxFrames - 40) p.opacity = Math.max(0, p.opacity - 0.025);
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });

        if (frame < maxFrames) requestAnimationFrame(animate);
    }
    animate();
}

function createParticles() {
    const container = document.getElementById('bgParticles');
    container.innerHTML = '';
    const colors = ['rgba(99,102,241,0.15)', 'rgba(139,92,246,0.12)', 'rgba(167,139,250,0.1)', 'rgba(236,72,153,0.08)'];

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 5 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 15 + 10;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        container.appendChild(particle);
    }
}


// ========================================
// 10. SYSTEM INITIALIZATION
// ========================================

createParticles();
initFacultyQuiz();
updateDashboardUI();
updateDinoUI();

// Check for existing session on page load
// If no session, the login overlay is shown (it's already visible by default in HTML)
checkExistingSession();

// Allow pressing Enter in login form
document.getElementById("loginUsername").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("loginPassword").focus();
});
document.getElementById("loginPassword").addEventListener("keydown", (e) => {
    if (e.key === "Enter") loginUser();
});
document.getElementById("registerConfirmPassword").addEventListener("keydown", (e) => {
    if (e.key === "Enter") loginUser();
});

// Auto resize support
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Fullscreen mode toggling support
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            const textSpan = document.getElementById("fullscreenText");
            if (textSpan) textSpan.textContent = "ย่อจอ";
        }).catch(err => {
            showToast("ไม่สามารถเข้าสู่โหมดเต็มจอได้: " + err.message, "danger");
        });
    } else {
        document.exitFullscreen().then(() => {
            const textSpan = document.getElementById("fullscreenText");
            if (textSpan) textSpan.textContent = "เต็มจอ";
        });
    }
}

// Track fullscreen exit via ESC key
document.addEventListener("fullscreenchange", () => {
    const textSpan = document.getElementById("fullscreenText");
    if (textSpan) {
        if (document.fullscreenElement) {
            textSpan.textContent = "ย่อจอ";
        } else {
            textSpan.textContent = "เต็มจอ";
        }
    }
});

// Update wallet balance indicator across the UI
function updateWalletUI() {
    const walletTextEl = document.getElementById("userWalletText");
    if (walletTextEl) {
        walletTextEl.textContent = `💰 กระเป๋าเงิน: ${state.wallet} บาท (เติมเงิน)`;
    }
}

// Show modal prompting user to pay for exam if quota limit exceeded
function showPaymentRequiredModal(exam, cost) {
    const modal = document.getElementById("paymentModalOverlay");
    const title = document.getElementById("paymentModalTitle");
    const body = document.getElementById("paymentModalBody");
    const icon = document.getElementById("paymentModalIcon");

    if (icon) icon.textContent = "⚠️";
    if (title) title.textContent = "โควตาทำข้อสอบฟรีหมดแล้ว";
    
    let html = `
        <div class="payment-info-box">
            <p>คุณตอบคำถามครบกำหนด 40 ข้อสำหรับวันนี้แล้ว</p>
            <p style="margin-top: 5px; font-size: 0.85rem; color: var(--text-muted);">
                (กำลังทยอยฟื้นฟูโควตาฟรีให้อัตโนมัติ 1 ข้อต่อ 1 นาที)
            </p>
            <p style="margin-top: 15px; font-weight: 600;">
                ทำข้อสอบชุดนี้: <strong>${exam.title}</strong> จำนวน <strong>${exam.questions.length} ข้อ</strong>
            </p>
            <p style="color: #fbbf24; margin-top: 5px; font-size: 1.1rem; font-weight: 700;">
                ราคาข้อละ 2 บาท (รวมเป็นเงิน ${cost} บาท)
            </p>
            <div class="payment-balance-display">
                ยอดเงินของคุณ: ${state.wallet} บาท
            </div>
        </div>
        <div class="payment-btn-group">
    `;

    if (state.wallet >= cost) {
        html += `
            <button class="btn-primary" onclick="payAndStartExam('${exam.id}', ${cost})">
                💳 ชำระเงิน ${cost} บาทเพื่อทำทันที
            </button>
        `;
    } else {
        html += `
            <button class="btn-secondary" style="border-color: var(--danger); color: var(--danger); cursor: not-allowed;" disabled>
                ❌ ยอดเงินคงเหลือไม่เพียงพอ
            </button>
            <button class="btn-primary" onclick="showTopUpModal()">
                💰 เติมเงินเข้ากระเป๋า
            </button>
        `;
    }

    html += `
            <button class="btn-secondary" onclick="closePaymentModal()">ยกเลิก</button>
        </div>
    `;

    if (body) body.innerHTML = html;
    if (modal) modal.style.display = "flex";
}

// Deduct cost and start the exam as paid
function payAndStartExam(examId, cost) {
    const exam = EXAMS_DATABASE.find(e => e.id === examId);
    if (!exam) return;

    if (state.wallet >= cost) {
        state.wallet -= cost;
        saveState();
        updateWalletUI();
        closePaymentModal();
        
        activeExamState.examId = exam.id;
        activeExamState.questions = shuffleArray(exam.questions);
        activeExamState.index = 0;
        activeExamState.score = 0;
        activeExamState.isPaid = true; // flag as paid!

        document.getElementById("activeExamTitle").textContent = exam.title + " (Paid)";
        document.getElementById("examHubView").classList.remove("active");
        document.getElementById("examActiveView").classList.add("active");
        document.getElementById("examResultView").classList.remove("active");

        renderExamQuestion();
        showToast(`💳 ชำระเงินสำเร็จแล้ว! ได้รับสิทธิ์ทำข้อสอบชุดนี้เรียบร้อย`, "success");
    } else {
        showToast("ยอดเงินของคุณไม่เพียงพอ", "danger");
    }
}

// Show the top-up scan QR modal
function showTopUpModal() {
    const modal = document.getElementById("paymentModalOverlay");
    const title = document.getElementById("paymentModalTitle");
    const body = document.getElementById("paymentModalBody");
    const icon = document.getElementById("paymentModalIcon");

    if (icon) icon.textContent = "💰";
    if (title) title.textContent = "เติมเงินเข้ากระเป๋า";
    
    if (body) {
        body.innerHTML = `
            <div class="payment-info-box">
                <p>เติมเงินวันนี้เพื่อเข้าถึงชุดข้อสอบเพิ่มเติมทันที</p>
                <div class="payment-balance-display" style="margin-bottom: 10px;">
                    ยอดเงินปัจจุบัน: ${state.wallet} บาท
                </div>
                <p style="font-size: 0.8rem; color: var(--text-muted);">
                    สแกน QR Code ด้านล่างเพื่อชำระเงิน หรือคลิกเลือกเติมด่วนจำลองด้านล่าง
                </p>
                <div class="qr-code-box">
                    <svg width="140" height="140" viewBox="0 0 29 29" style="image-rendering: pixelated; fill: #000;">
                        <path d="M0 0h7v7H0zm0 22h7v7H0zM22 0h7v7h-7zM2 2h3v3H2zm0 24h3v3H2zm22-24h3v3h-3zM9 0h1v4H9zm2 0h2v1h-2zm3 0h2v2h-2zm4 0h1v3h-1zm-9 5h3v1H9zm4 0h1v2h-1zm3 0h1v1h-1zm-7 2h2v1H9zm4 0h1v2h-1zm6 0h2v1h-2zm-1 2h2v2h-2zm-3 1h2v1h-2zm4 0h1v2h-1zm-8 2h3v1H9zm4 0h1v1h-1zm2 0h2v2h-2zm-6 2h1v1H9zm1 0h3v1h-3zm-2 2h2v2H8zm3 0h1v1h-1zm2 0h1v1h-1zm1 0h2v2h-2zm-7 3h3v1H9zm4 0h1v2h-1zm4 0h1v1h-1zm-5 2h2v1h-2zm5 0h1v1h-1zm2 0h2v1h-2zm-12 1h1v1H0zm2 0h1v1H2zm4 0h1v1H6zm1 0h2v1H7zm11 0h2v1h-2zm2 0h1v1h-2zM0 24h7v1H0zm0 2h7v1H0zm22 0h3v1h-3zm4 0h3v1h-3zm-4 2h7v1h-7z" />
                    </svg>
                </div>
            </div>
            
            <div class="topup-grid">
                <button class="topup-option-btn" onclick="performTopUp(20)">+ 20 ฿</button>
                <button class="topup-option-btn" onclick="performTopUp(50)">+ 50 ฿</button>
                <button class="topup-option-btn" onclick="performTopUp(100)">+ 100 ฿</button>
            </div>
            
            <div class="payment-btn-group">
                <button class="btn-secondary" onclick="closePaymentModal()">ปิดหน้าต่าง</button>
            </div>
        `;
    }
    if (modal) modal.style.display = "flex";
}

// Perform simulated top-up
function performTopUp(amount) {
    state.wallet += amount;
    saveState();
    updateWalletUI();
    showToast(`💰 เติมเงินจำลองสำเร็จจำนวน ${amount} บาท!`, "success");
    showTopUpModal(); // refresh view
}

// Close the overlay modal
function closePaymentModal() {
    const modal = document.getElementById("paymentModalOverlay");
    if (modal) modal.style.display = "none";
}

// Master Interval: Run every 1 minute (60,000ms) to track study statistics and recover limits
setInterval(() => {
    if (currentLoggedInUser) {
        // 1. Add 1 minute to studyTime
        state.studyTime = (state.studyTime || 0) + 1;

        // 2. Recover limit: decrement count by 1 (until 0)
        if (state.examLimit && state.examLimit.count > 0) {
            state.examLimit.count--;
        }

        saveState();

        // 3. Update dashboard stats display
        const studyTimeValEl = document.getElementById("dashStudyTimeVal");
        if (studyTimeValEl) {
            studyTimeValEl.textContent = state.studyTime;
        }

        // 4. Update limit countdown display if currently viewing examPage
        const activePage = document.querySelector(".app-page.active");
        if (activePage && activePage.id === "examPage") {
            renderExamHub();
        }
    }
}, 60000);

// Revive the dead dinosaur by charging 50 Baht
function reviveDinoSystem() {
    if (state.wallet >= 50) {
        state.wallet -= 50;
        state.dino.stage = state.dino.previousStageBeforeDeath || "baby";
        state.dino.emotion = "ดีใจ";
        state.dino.hunger = 100;
        state.dino.mood = 100;
        saveState();
        updateDinoUI();
        updateWalletUI();
        showToast("💖 ชุบชีวิตไดโนเสาร์คู่ใจสำเร็จแล้ว! ดูแลน้องให้ดีๆ นะครับ", "success");
    } else {
        showToast("❌ ยอดเงินจำลองไม่เพียงพอ! กรุณาเติมเงิน 50 บาทเพื่อทำการชุบชีวิต", "danger");
        showTopUpModal();
    }
}

// Render the collected mature dinosaurs
function renderDinoCollection() {
    const grid = document.getElementById("dinoCollectionGrid");
    if (!grid) return;

    const collection = state.dinoCollection || [];
    if (collection.length === 0) {
        grid.innerHTML = `<p class="muted-text" style="grid-column: span 3; text-align: center; padding: 2rem; font-size: 0.85rem;">ยังไม่มีไดโนเสาร์สะสม เลี้ยงไดโนเสาร์จากไข่ให้โตเต็มวัยเพื่อสะสมคู่หูเพิ่ม!</p>`;
        return;
    }

    grid.innerHTML = "";
    collection.forEach((dino) => {
        const card = document.createElement("div");
        card.className = "dino-collection-card";

        const stageInfo = DINO_EVOLUTION_STAGES[dino.stage] || { emoji: "🦕", label: "ไดโนเสาร์สะสม" };
        const dateStr = new Date(dino.evolvedAt).toLocaleDateString("th-TH", {
            year: "numeric", month: "short", day: "numeric"
        });

        card.innerHTML = `
            <div class="col-dino-emoji">${stageInfo.emoji}</div>
            <h4 class="col-dino-name">${dino.name}</h4>
            <p class="col-dino-type">${stageInfo.label}</p>
            <p class="col-dino-date">สะสมเมื่อ: ${dateStr}</p>
        `;
        grid.appendChild(card);
    });
}
