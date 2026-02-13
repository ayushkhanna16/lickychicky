const BASE = '/pallavi-anniversary/public/media'

export function getMemoriesForMonth(monthId) {
  const memories = {
    month1: {
      photos: [
        { id: 'p1-1', url: `${BASE}/month0/photos/07BEF6C9-240E-4ACD-829F-43316CAA86BF_4_5005_c.jpeg`, caption: 'Our first memory together' },
        { id: 'p1-2', url: `${BASE}/month0/photos/1C29B865-CF35-47E1-89E6-517C52461D07_4_5005_c.jpeg`, caption: '' },
        { id: 'p1-3', url: `${BASE}/month0/photos/32280951-28E5-470D-AF95-836751D052CD_1_105_c.jpeg`, caption: '' },
        { id: 'p1-4', url: `${BASE}/month0/photos/9931B5F8-A627-4157-B4CD-3D327682B895_4_5005_c.jpeg`, caption: '' },
        { id: 'p1-5', url: `${BASE}/month0/photos/BA61A4D4-BA00-4E59-A010-B00407AB069D_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: [
        { id: 't1-1', text: 'August 2025 — Where it all began.', date: 'August 2025' },
      ]
    },
    month2: {
      photos: [
        { id: 'p2-1', url: `${BASE}/month1/photos/10B47072-F8E3-4870-A60E-53C144D7CBCD_1_105_c.jpeg`, caption: '' },
        { id: 'p2-2', url: `${BASE}/month1/photos/1BA77030-DD8C-4E11-8B46-0D1C7CDDC690_1_105_c.jpeg`, caption: '' },
        { id: 'p2-3', url: `${BASE}/month1/photos/601E29E0-77D1-493B-BE8B-5F3FA1A95F48_1_105_c.jpeg`, caption: '' },
        { id: 'p2-4', url: `${BASE}/month1/photos/96170EB3-C74B-4C25-8C63-94291F4B0634_1_105_c.jpeg`, caption: '' },
        { id: 'p2-5', url: `${BASE}/month1/photos/9AA9D42D-4818-4AA3-A3CF-E35BFD5AA0AF_1_105_c.jpeg`, caption: '' },
        { id: 'p2-6', url: `${BASE}/month1/photos/E84D7F12-73CF-4378-8800-C1295E53CBF5_1_105_c.jpeg`, caption: '' },
        { id: 'p2-7', url: `${BASE}/month1/photos/F82B497B-872E-4069-AB52-B30E2111A409_1_105_c.jpeg`, caption: '' },
        { id: 'p2-8', url: `${BASE}/month1/photos/FF66111E-6ABC-40A1-93E5-3939029657CC_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: [
        { id: 't2-1', text: 'September 2025 — Growing together.', date: 'September 2025' },
      ]
    },
    month3: {
      photos: [
        { id: 'p3-1', url: `${BASE}/month2/photos/229DEC06-D108-48C8-8AAC-F69BBE6951FE_1_105_c.jpeg`, caption: '' },
        { id: 'p3-2', url: `${BASE}/month2/photos/408F05E2-BD68-42C7-9DBB-EE72AAF1742D_4_5005_c.jpeg`, caption: '' },
        { id: 'p3-3', url: `${BASE}/month2/photos/4BCD7FFC-4916-4083-ABA6-B984C9AA8C8D_1_102_o.jpeg`, caption: '' },
        { id: 'p3-4', url: `${BASE}/month2/photos/5A36B2A2-8233-4D35-9FDA-6F8E4C0523B8_4_5005_c.jpeg`, caption: '' },
        { id: 'p3-5', url: `${BASE}/month2/photos/E2311AB6-E03D-45CF-8325-1EF9FC676692_4_5005_c.jpeg`, caption: '' },
        { id: 'p3-6', url: `${BASE}/month2/photos/E6A28C1B-F9C4-43D9-BA6A-1B2D1A917D91_1_105_c.jpeg`, caption: '' },
      ],
      videos: [],
      voiceNotes: [],
      texts: [
        { id: 't3-1', text: 'October 2025 — Adventures begin.', date: 'October 2025' },
      ]
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
      texts: [
        { id: 't4-1', text: 'November 2025 — Making memories.', date: 'November 2025' },
      ]
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
      texts: [
        { id: 't5-1', text: 'December 2025 — New beginnings.', date: 'December 2025' },
      ]
    },
    month6: {
      photos: [],
      videos: [],
      voiceNotes: [],
      texts: [
        { id: 't6-1', text: 'January 2026 — Six months strong.', date: 'January 2026' },
      ]
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
  }
  return gradients[monthId] || gradients.month1
}
