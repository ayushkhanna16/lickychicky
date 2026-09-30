const BASE = '/media'

export function getMemoriesForMonth(monthId) {
  const memories = {
    month1: {
      photos: [
        { id: 'p1-1', url: `${BASE}/month1/photos/10B47072-F8E3-4870-A60E-53C144D7CBCD_1_105_c.jpeg`, caption: '' },
        { id: 'p1-2', url: `${BASE}/month1/photos/1BA77030-DD8C-4E11-8B46-0D1C7CDDC690_1_105_c.jpeg`, caption: '' },
        { id: 'p1-3', url: `${BASE}/month1/photos/601E29E0-77D1-493B-BE8B-5F3FA1A95F48_1_105_c.jpeg`, caption: '' },
        { id: 'p1-4', url: `${BASE}/month1/photos/96170EB3-C74B-4C25-8C63-94291F4B0634_1_105_c.jpeg`, caption: '' },
        { id: 'p1-5', url: `${BASE}/month1/photos/9AA9D42D-4818-4AA3-A3CF-E35BFD5AA0AF_1_105_c.jpeg`, caption: '' },
        { id: 'p1-6', url: `${BASE}/month1/photos/E84D7F12-73CF-4378-8800-C1295E53CBF5_1_105_c.jpeg`, caption: '' },
        { id: 'p1-7', url: `${BASE}/month1/photos/F82B497B-872E-4069-AB52-B30E2111A409_1_105_c.jpeg`, caption: '' },
        { id: 'p1-8', url: `${BASE}/month1/photos/FF66111E-6ABC-40A1-93E5-3939029657CC_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month2: {
      photos: [
        { id: 'p2-1', url: `${BASE}/month2/photos/229DEC06-D108-48C8-8AAC-F69BBE6951FE_1_105_c.jpeg`, caption: '' },
        { id: 'p2-2', url: `${BASE}/month2/photos/408F05E2-BD68-42C7-9DBB-EE72AAF1742D_4_5005_c.jpeg`, caption: '' },
        { id: 'p2-3', url: `${BASE}/month2/photos/4BCD7FFC-4916-4083-ABA6-B984C9AA8C8D_1_102_o.jpeg`, caption: '' },
        { id: 'p2-4', url: `${BASE}/month2/photos/5A36B2A2-8233-4D35-9FDA-6F8E4C0523B8_4_5005_c.jpeg`, caption: '' },
        { id: 'p2-5', url: `${BASE}/month2/photos/E6A28C1B-F9C4-43D9-BA6A-1B2D1A917D91_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month3: {
      photos: [
        { id: 'p3-1', url: `${BASE}/month3/photos/5A36B2A2-8233-4D35-9FDA-6F8E4C0523B8_4_5005_c.jpeg`, caption: '' },
        { id: 'p3-2', url: `${BASE}/month3/photos/E2311AB6-E03D-45CF-8325-1EF9FC676692_4_5005_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month4: {
      photos: [
        { id: 'p4-1', url: `${BASE}/month4/photos/1EC8E4CE-D2F5-4033-805D-AF3FC1BB13CB_4_5005_c.jpeg`, caption: '' },
        { id: 'p4-2', url: `${BASE}/month4/photos/6557DB02-968A-42BF-9568-63482BFB7A58_1_102_o.jpeg`, caption: '' },
        { id: 'p4-3', url: `${BASE}/month4/photos/B1913C78-6DFB-46B8-A06B-67E0C2B674AF_1_102_o.jpeg`, caption: '' },
        { id: 'p4-4', url: `${BASE}/month4/photos/BC111C3F-3A99-4908-88A6-3BA2C0605009_1_102_o.jpeg`, caption: '' },
        { id: 'p4-5', url: `${BASE}/month4/photos/BC82A2C9-F23F-4F2E-A0FD-28B8EA7EA58A_1_102_a.jpeg`, caption: '' },
        { id: 'p4-6', url: `${BASE}/month4/photos/C3D49CA7-D5C7-4B81-846F-9492771B270D_4_5005_c.jpeg`, caption: '' },
        { id: 'p4-7', url: `${BASE}/month4/photos/E474989D-42AF-49DD-9815-E64631716B4B_4_5005_c.jpeg`, caption: '' },
        { id: 'p4-8', url: `${BASE}/month4/photos/FBD55952-31B4-4EF7-AD89-309C99ED962B_4_5005_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month5: {
      photos: [
        { id: 'p5-1', url: `${BASE}/month5/photos/01D1E4B8-0E88-4873-A9B0-F619BE2996AC_1_105_c.jpeg`, caption: '' },
        { id: 'p5-2', url: `${BASE}/month5/photos/6871AEE4-9103-4E81-9E19-F1730846C9BC_1_105_c.jpeg`, caption: '' },
        { id: 'p5-3', url: `${BASE}/month5/photos/AF34050B-06F9-4208-B2BB-C275B7B2BA57_1_105_c.jpeg`, caption: '' },
        { id: 'p5-4', url: `${BASE}/month5/photos/F699092A-C687-44DF-9F52-32D135C33326_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month6: {
      photos: [],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month7: {
      photos: [
        { id: 'p7-1', url: `${BASE}/month7/photos/11AE4403-03F6-42B1-938E-40CA192C2D71_1_105_c.jpeg`, caption: '' },
        { id: 'p7-2', url: `${BASE}/month7/photos/94D0BC2E-BF0D-4E1E-939D-1DCC47B72866_1_105_c.jpeg`, caption: '' },
        { id: 'p7-3', url: `${BASE}/month7/photos/9A31B3E4-7806-4D6F-B77B-7E79DC7B5B07_1_105_c.jpeg`, caption: '' },
        { id: 'p7-4', url: `${BASE}/month7/photos/A4C73415-FA15-43DB-AFDC-1FB0A144B072_1_102_o.jpeg`, caption: '' },
        { id: 'p7-5', url: `${BASE}/month7/photos/C6388776-2F29-4CA8-BB37-DC1F9A7368AA_1_102_o.jpeg`, caption: '' },
        { id: 'p7-6', url: `${BASE}/month7/photos/F8C39D4A-7D7E-4328-AC73-3706043C513C_1_102_o.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month8: {
      photos: [
        { id: 'p8-1', url: `${BASE}/month8/photos/181A762D-4FD1-4D6C-85A6-DC444ACC1825_1_105_c.jpeg`, caption: '' },
        { id: 'p8-2', url: `${BASE}/month8/photos/7528E034-FFEB-459D-B11A-84D182D1F9F9_1_105_c.jpeg`, caption: '' },
        { id: 'p8-3', url: `${BASE}/month8/photos/D4C869FA-50B2-4F3E-87AE-8D36EBBB8A5A_1_105_c.jpeg`, caption: '' },
        { id: 'p8-4', url: `${BASE}/month8/photos/E9A24594-305A-42D6-895A-F9B1E483A413_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month9: {
      photos: [
        { id: 'p9-1', url: `${BASE}/month9/photos/56220847-D525-4CD1-8C15-9D3894114171_1_105_c.jpeg`, caption: '' },
        { id: 'p9-2', url: `${BASE}/month9/photos/78BD6F76-3E4B-4981-8B87-D9A07921F20E_1_105_c.jpeg`, caption: '' },
        { id: 'p9-3', url: `${BASE}/month9/photos/973A98F1-0F19-4C2D-9382-C86B4F820478_1_105_c.jpeg`, caption: '' },
        { id: 'p9-4', url: `${BASE}/month9/photos/AD15181E-DF0A-4FB3-BA85-86643821168D_1_105_c.jpeg`, caption: '' },
        { id: 'p9-5', url: `${BASE}/month9/photos/DB853ED8-8B75-421D-95B8-FB0BEB1C6179_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month10: {
      photos: [
        { id: 'p10-1', url: `${BASE}/month10/photos/1375D224-01EB-44DB-89EC-03238B4C7968_1_105_c.jpeg`, caption: '' },
        { id: 'p10-2', url: `${BASE}/month10/photos/181C309E-FE4A-4980-B1F4-8AF824BDDD1D_1_105_c.jpeg`, caption: '' },
        { id: 'p10-3', url: `${BASE}/month10/photos/2FF193C4-54B8-47CE-9B88-661D4E7ECA1A_1_105_c.jpeg`, caption: '' },
        { id: 'p10-4', url: `${BASE}/month10/photos/445A2D87-9D1B-42AA-998A-9C898636BB5A_1_105_c.jpeg`, caption: '' },
        { id: 'p10-5', url: `${BASE}/month10/photos/64DD3F0C-2CD5-47C6-8026-738CFBA340CB_1_105_c.jpeg`, caption: '' },
        { id: 'p10-6', url: `${BASE}/month10/photos/806BAD3D-E3B2-496D-AFF1-738CEB10FC01_1_105_c.jpeg`, caption: '' },
        { id: 'p10-7', url: `${BASE}/month10/photos/88432504-3470-4FBC-8BE6-6D9157BA94FC_1_105_c.jpeg`, caption: '' },
        { id: 'p10-8', url: `${BASE}/month10/photos/8B2893EB-488D-45AF-A2BE-64690B92482D_1_105_c.jpeg`, caption: '' },
        { id: 'p10-9', url: `${BASE}/month10/photos/C8E13E94-EDB3-40D4-9975-6651FEB149C3_1_105_c.jpeg`, caption: '' },
        { id: 'p10-10', url: `${BASE}/month10/photos/DD81E86C-FE5E-43F4-97EA-BE2FDA162671_1_105_c.jpeg`, caption: '' },
        { id: 'p10-11', url: `${BASE}/month10/photos/DEFF222E-DA7E-47DB-9BB6-FE7ED02386D8_1_105_c.jpeg`, caption: '' },
        { id: 'p10-12', url: `${BASE}/month10/photos/E8724730-A9D6-4D1D-B9BB-478A6B257320_1_105_c.jpeg`, caption: '' },
        { id: 'p10-13', url: `${BASE}/month10/photos/ED453142-CA0B-4F0E-9ACE-5447F4FAEA63_1_105_c.jpeg`, caption: '' },
        { id: 'p10-14', url: `${BASE}/month10/photos/F29798A4-CF77-4D95-8472-7647EEE4117D_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month11: {
      photos: [
        { id: 'p11-1', url: `${BASE}/month11/photos/348C340C-5CAA-410B-8AF2-F9BC42A60F7B_1_105_c.jpeg`, caption: '' },
        { id: 'p11-2', url: `${BASE}/month11/photos/4E488724-86CB-4F8F-A1EF-86E438CBD95A_1_105_c.jpeg`, caption: '' },
        { id: 'p11-3', url: `${BASE}/month11/photos/9BA6A0C9-1357-4373-9F1C-3218018959F0_1_105_c.jpeg`, caption: '' },
        { id: 'p11-4', url: `${BASE}/month11/photos/A8A25BF5-E58C-4B9C-BD5C-A4D5C102FBE3_1_105_c.jpeg`, caption: '' },
        { id: 'p11-5', url: `${BASE}/month11/photos/B677B51F-7609-40A6-A864-0D0CF62613A5_1_105_c.jpeg`, caption: '' },
        { id: 'p11-6', url: `${BASE}/month11/photos/CFD8482F-3828-4357-BF28-F4B86056544B.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month12: {
      photos: [
        { id: 'p12-1', url: `${BASE}/month12/photos/065BE772-CA4E-49D5-9EA6-1934AB86B3BD_1_105_c.jpeg`, caption: '' },
        { id: 'p12-2', url: `${BASE}/month12/photos/3D98F8BF-6365-4171-B5A9-D9FBF71F17E1_1_105_c.jpeg`, caption: '' },
        { id: 'p12-3', url: `${BASE}/month12/photos/404EF3B0-031C-4F8B-944B-2A90BF21EAC0_1_105_c.jpeg`, caption: '' },
        { id: 'p12-4', url: `${BASE}/month12/photos/4D2AA7C8-0656-4D08-9972-544BB0658BA9_1_105_c.jpeg`, caption: '' },
        { id: 'p12-5', url: `${BASE}/month12/photos/658809FF-979E-4622-A99F-C97A0587563B_1_105_c.jpeg`, caption: '' },
        { id: 'p12-6', url: `${BASE}/month12/photos/BD60DC9B-C5FC-4D39-8FF8-95A50C7FC45A_1_105_c.jpeg`, caption: '' },
        { id: 'p12-7', url: `${BASE}/month12/photos/DA897F82-0249-48A5-AC56-395D0B487E62_1_105_c.jpeg`, caption: '' },
        { id: 'p12-8', url: `${BASE}/month12/photos/DDD42FEA-87EA-481F-B77D-507F191EE966_1_105_c.jpeg`, caption: '' },
        { id: 'p12-9', url: `${BASE}/month12/photos/E80B9D73-639B-4818-AF62-6C3FFD8D2AE0_1_105_c.jpeg`, caption: '' },
        { id: 'p12-10', url: `${BASE}/month12/photos/EFE162CE-EEDD-4876-AE34-5FE9692CBE75_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
    month13: {
      photos: [
        { id: 'p13-1', url: `${BASE}/month13/photos/22EE1610-9DEC-4B74-8238-C439C4367644_1_105_c.jpeg`, caption: '' },
        { id: 'p13-2', url: `${BASE}/month13/photos/7294A763-69C4-4653-9141-32872FA654E2_1_105_c.jpeg`, caption: '' },
        { id: 'p13-3', url: `${BASE}/month13/photos/73A77B76-B333-4831-854C-89251CA9CAAD_1_105_c.jpeg`, caption: '' },
        { id: 'p13-4', url: `${BASE}/month13/photos/D7E585EA-8EA0-4288-9B96-74A8A42ED1CE_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: []
    },
  }

  return memories[monthId] || { photos: [], videos: [], voiceNotes: [], texts: [] }
}

export function getMonthGradient(monthId) {
  const gradients = {
    month1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    month2: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    month3: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    month4: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    month5: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    month6: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    month7: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    month8: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
    month9: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
    month10: 'linear-gradient(135deg, #fdcb6e 0%, #6c5ce7 100%)',
    month11: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
    month12: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    month13: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  }
  return gradients[monthId] || gradients.month1
}
