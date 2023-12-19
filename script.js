
		
		function convertToC() {
			const banglaCode = document.getElementById('banglaCode').value;
			const convertedCode = translateToC(banglaCode);
			document.getElementById('convertedCode').innerText = convertedCode;
		}

		function translateToC(banglaCode) {
			// Replace Bangla keywords with corresponding C keywords
			const mapping = {
				'# অন্তর্ভুক্ত': '#include',
				'# ডিফাইন': '#define',
				'< স্ট্যান্ডার্ড_ইন_আউট.হেডার >': '<stdio.h>',
				'< স্ট্যান্ডার্ড_লাইব্রেরি.হেডার >': '<stdlib.h>',
				'< গণিত.হেডার >': '<math.h>',
				'< স্ট্রিং.হেডার >': '<string.h>',
				'< স্ট্যান্ডার্ড_বুলিয়ান.হেডার >': '<stdbool.h>',

				'মৌলিক': 'main',
				'নাও': 'scanf',
				'দেখাও': 'printf',
				'ফেরত': 'return',

				'০': '0',
				'১': '1',
				'২': '2',
				'৩': '3',
				'৪': '4',
				'৫': '5',
				'৬': '6',
				'৭': '7',
				'৮': '8',
				'৯': '9',

				'পূর্ণ': 'int',
				'দশম': 'float',
				'বর্ণ': 'char',
				'ডাবল': 'double',


				'%প': '%d',
				'%দ': '%f',
				'%ব': '%c',
				'%লদ': '%lf',
				'%লপ': '%ld',
				'%স': '%s',
				'%পি': '%p',
				'%ইউ': '%u',
				'%এক্স': '%x',
				'%যাই': '%zu',
				'ঘদ': 'f',
				

            
                                'যদি': 'if',
				'নাহলে': 'else',
				'ফর': 'for',
				'যতক্ষণ': 'while',
				'করো': 'do',

				'থামো': 'break',
				'বাদ': 'continue',
				'সুইচ': 'switch',
				'কেস': 'case',
				'ডিফল্ট': 'default',
				'লাফ_দাও': 'goto',
				'লেবেল': 'lebel',

				'অটো': 'auto',
				'স্ট্রাক্ট': 'struct',
				'লম্বা': 'long',
				'ইনুম': 'enum',
				'রেজিস্টার': 'register',
				'টাইপ_ডেফ': 'typedef',
				'এক্সটার্ণ': 'extern',
				'ইউনিয়ন': 'union',
				'নির্দিষ্ট': 'const',
				'স্ট্যাটিক': 'static',
				'সাইজ_অফ': 'sizeof',
				'খাটো': 'short',
				'শূণ্য': 'void',
				'ভুলাটাইল': 'volatile',
				'চিহ্ন': 'signed',
				'প্রতীকহীন': 'unsigned',

				'সত্য': 'true',
				'মিথ্যা': 'false',
				'বুল': '_Bool',

				'অক্ষর_নিব': 'getchar',
				'অক্ষর_দেখাব': 'putchar',
				'বাক্য_লই': 'gets',
				'বাক্য_দেখাই': 'puts',
				'বা-লেন': 'strlen',
				'বা-কপি': 'strcpy',
				'বা-কেট':'strcat',
				'বা-কম': 'strcmp',
			};

			// Replace Bangla words with English keywords
			for (const [banglaWord, englishWord] of Object.entries(mapping)) {
				banglaCode = banglaCode.replace(new RegExp(banglaWord, 'g'), englishWord);
			}

			// Translate Bangla sentences in double quotation to English
			banglaCode = banglaCode.replace(/"([^"]*)"/g, (match, p1) => `"${translateToC(p1)}"`);

			return banglaCode;
		}

		function copyToClipboard() {
        const convertedCode = document.getElementById('convertedCode');
        const codeTextarea = document.getElementById('code');

        // Copy code to clipboard
        const range = document.createRange();
        range.selectNode(convertedCode);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Copy and Paste code in Compiler');

        // Paste the copied code into the compiler textarea
        codeTextarea.value = convertedCode.innerText;
    }



  async function compileCode() {
	const code = document.getElementById('code').value;

	const options = {
	  method: 'POST',
	  url: 'https://c-code-compiler.p.rapidapi.com/',
	  headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '059e19d109msh388b2f588819fb7p12bd72jsn81fbeb8be6a3',
		'X-RapidAPI-Host': 'c-code-compiler.p.rapidapi.com'
	  },
	  data: {
		code: code,
		version: 'latest'
	  }
	};

	try {
	  const response = await axios.request(options);
	  const output = document.getElementById('output');
	  output.innerHTML = '<pre>' + response.data.output + '</pre>';
	} catch (error) {
	  console.error('Error:', error);
	}
  }





