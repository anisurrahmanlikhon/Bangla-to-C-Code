
		
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
				'লুপ': 'for',
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
				'নাল': 'NULL',

				'অক্ষর_নিব': 'getchar',
				'অক্ষর_দেখাব': 'putchar',
				'বাক্য_লই': 'gets',
				'বাক্য_দেখাই': 'puts',
				'বালেন': 'strlen',
				'বাকপি': 'strcpy',
				'বাকেট':'strcat',
				'বাকম': 'strcmp',

				'সর্বোচ্চ':'ceil',
				'সর্বনিম্ন':'floor',
				'রাউন্ড':'round',
				'বর্গমূল': 'sqrt',
				'ঘনমূল': 'cbrt',
				'ঘাত': 'pow',
				'পরম':'fabs',
				'সূচক': 'exp',
				'লগ': 'log',
				'ছাঁটাই':'trunc',
				'ভাগশেষ':'fmod',
				'ভুজ': 'sin',
				'কোটি':'cos',
				'স্পর্শক': 'tan',	
				
				'নথি': 'FILE',
				'পড়ার_মুড':'r',
				'লেখার_মুড':'w',
				'নথিতে_নাও': 'fscanf',
				'নথি_দেখাও': 'fprintf',
				'নথি_পড়ো': 'fread',
				'নথিতে_লিখো': 'fwrite',
				
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
        alert('Copy the code');

        // Paste the copied code into the compiler textarea
        codeTextarea.value = convertedCode.innerText;
    }



  





